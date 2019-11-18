import Sheet from './Sheet';

export default class SheetCollection{

    constructor(socket, id, log=console.log){
        this.id = id;
        this.sheets = {};
        this.socket = socket;
        this.fetchStack = [];
        this.log = log;

        this.refs = {};

        this.socket.on('RECV', ({position, percent, projName, sheetName, data})=>{

            this.log(`[${projName}] 的 [${this.sheets[sheetName].desc}] 已下载${(percent*100).toFixed(2)+'%'}`, true);

            let readyMsg = {
                id: this.id,
                projName,
                sheetName,
                position,
                type: this.sheets[sheetName].type
            }

            this.socket.emit('SEND', readyMsg);

            this.sheets[sheetName].receive(data)

        }).on('DONE', ({projName, sheetName, data}) => {
            this.log(`[${projName}] 的 [${this.sheets[sheetName].desc}] 已下载100%`, true);

            this.sheets[sheetName].receive(data, 'LAST', () => {
                this.fetchTableWorker();
            })
        }).on('NOTFOUND', ({projName, sheetName, data}) => {
            this.log(`[${projName}] 的 [${this.sheets[sheetName].desc}] 未找到，极可能是您没有上传相关的数据文件。请先完成上传并更新数据后再回来。`, true);
            this.fetchStack = [];
            this.afterFetched(false);
        }).on("SAVED", () => {
            console.log('已保存')
        })

    }

    get(name){
        return this.sheets[name];
    }

    clearSheets(){
        this.sheets = {};
        this.id = undefined;
    }

    addSheet(name, sheet){
        console.log(sheet.constructor.name);
        if(sheet.constructor.name !== 'Sheet'){
            throw Error('加入SheetCollection的并不是一个Sheet对象');
        }
        this.sheets[name] = sheet;
    }

    addSheets(sheetDict){
        for (let name in sheetDict){
            this.addSheet(name, sheetDict[name]);
        }
    }

        /**
     * 表的递归查找过程
     * ================
     * 
     * 我们的系统中存在两种表，分别是remote表和local表。其中remote表基本是纯粹的数据，
     * 通过用户上传的XLS恢复而成，而local表则是FinancialTables定义的一系列表，在数据
     * 的基础上进行运算，并承担与用户的交互。
     * 
     * 当我们要打开一个表，也就是由Navigation触发了fetchTable的时候，我们知道它只做两
     * 件事，第一是找到所有的表，也就是使得所有被引用到的表的状态都是ready。第二件是
     * 将状态设为要打开的表。
     * 
     * 1. 检查栈顶元素
     * 
     *    a. 如果栈顶元素为remote表且不ready，那么向服务器请求数据（等待）
     *       取回的时候将栈顶表设为ready，并重新回到1。
     * 
     *    b. 如果栈顶元素为local且不ready，那么检查referred表
     *       如果所有referred元素都已ready那么调用import，local表也会设为ready，回到1.
     *       如果存在不ready的referred元素，那么将这些元素压入栈，回到1.
     * 
     *    c. 如果栈顶元素为ready，出栈，回到1。
     * 
     * 2. 如果 1.c 弹出了最后一个元素，那么setState。
     * 
     * 理论上这个过程应该通过一个递归或者while循环实现，但在实际中由于remote表涉及到
     * 前后端交互，因此在向服务器发送信息之后就不会再调用自己，而在收到信息的callback
     * 中再调用自己。
     * 
     * 需要注意的一些约束：
     * 1. fetchTable肯定是准备查找一个local表。
     */

    fetchTableWorker(){

        console.log(this.log, 'this log');

        if (this.fetchStack.length === 0){
            return;
        }

        // 取fetchStack中最后一个
        let {projName, sheetName, sheetSpec} = this.fetchStack[this.fetchStack.length - 1];
        
        // 如果取出的sheet已经是ready，那么将它从栈中弹出。如果弹出的是最后一个，
        // 表示我们所有需要取回的数据都已经结束，进入afterFetched，否则继续递归
        // 调用fetchTableWorker。
        if (sheetSpec.status === 'ready'){
            this.log(`[${projName}] 的 [${sheetSpec.desc}] 表已存在`);
            this.fetchStack.pop();
            
            if(this.fetchStack.length === 0){
                this.afterFetched(true);
            } else {
                console.log(projName, sheetName, 'fetched.')
                this.fetchTableWorker();
            }

        // 如果sheetSpec还没有ready，那么不弹出，并向服务器发送取回的信息。此处没
        // 有递归调用，而是收到服务器返回消息时才会继续调用fetchWorker。
        } else if (sheetSpec.location === 'remote'){
            this.log(`[${projName}] 的 [${sheetSpec.desc}] 表是远程数据表，待从后台获取`, true);
            this.socket.emit('SEND', {id: this.id, projName, sheetName, type: sheetSpec.type, position: 0});
            // now leave the remaining check to socket.on('DONE');

        // 如果sheetSpec的位置是本地，
        } else if (sheetSpec.location === 'local'){
            this.log(`[${projName}] 的 [${sheetSpec.desc}] 表是本地数据表，须先检查其所依赖的数据表`);
            let {referred} = sheetSpec,
                allReferredReady = true;

            for (let refName in referred){
                
                let ref = referred[refName];
                if (ref.location === 'remote' && this.sheets[refName] === undefined){
                    this.sheets[refName] = new Sheet(ref);
                }

                // console.log(this.sheets, refName, 'yep');
                if(this.sheets[refName].status != 'ready'){
                    this.log(`[${projName}] 的 [${this.sheets[refName].desc}] 进入队列`)
                    this.fetchStack.push({projName, sheetName: refName, sheetSpec: this.sheets[refName]});
                } 

                allReferredReady = allReferredReady && (this.sheets[refName].status === 'ready');
            }

            if(allReferredReady){
                this.sheets[sheetName].import(this.sheets);
            }
            this.fetchTableWorker();
        } else {
            this.log(`哎呀呀，[${sheetSpec.desc}] 没有定义location，请打电话联系程序员`)
        }
    }

    fetchTable = ({projName, sheetName, afterFetched}) => {

        console.log(this.fetchStack, 'current fetch stack before next');

        console.log(sheetName, this.sheets[sheetName]);
        if(this.sheets[sheetName].forceReload){
            this.sheets[sheetName].status = 'none';
        }
        this.afterFetched = afterFetched;
        this.fetchStack.push({projName, sheetName, sheetSpec: this.sheets[sheetName]});
        this.fetchTableWorker()
    }
}