import Sheet from './Sheet';

export default class SheetCollection{

    constructor(socket){
        this.sheets = {};
        this.socket = socket;
        this.fetchStack = [];

        this.refs = {};

        this.socket.on('RECV', ({position, percent, projName, sheetName, data})=>{

            let readyMsg = {
                projName,
                sheetName,
                position,
                type: this.sheets[sheetName].type
            }

            this.socket.emit('SEND', readyMsg);

            this.sheets[sheetName].receive(data)

        }).on('DONE', ({projName, sheetName, data}) => {
            this.sheets[sheetName].receive(data, 'LAST', () => {
                this.fetchTableWorker();
            })
        }).on("SAVED", () => {
            console.log('receipt.')
        })

    }

    get(name){
        return this.sheets[name];
    }

    clearSheets(){
        this.sheets = {};
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

        console.log('FetchTable® Worker Working.');

        if (this.fetchStack.length === 0){
            console.log('handling racing.')
            return;
        }

        let {projName, sheetName, sheetSpec} = this.fetchStack[this.fetchStack.length - 1];
        
        if (sheetSpec.status === 'ready'){
            this.fetchStack.pop();

            if(this.fetchStack.length === 0){
                this.afterFetched();
            } else {
                console.log(projName, sheetName, 'fetched.')
                this.fetchTableWorker();
            }

        } else if (sheetSpec.location === 'remote'){
            console.log('handling remote');
            this.socket.emit('SEND', { projName, sheetName, type: sheetSpec.type, position: 0});
            // now leave the remaining check to socket.on('DONE');

        } else if (sheetSpec.location === 'local'){
            console.log('handling local');
            let {referred} = sheetSpec,
                allReferredReady = true;

            for (let refName in referred){
                
                let ref = referred[refName];
                if (ref.location === 'remote' && this.sheets[refName] === undefined){
                    this.sheets[refName] = new Sheet(ref);
                }

                console.log(this.sheets, refName, 'yep');
                if(this.sheets[refName].status != 'ready'){
                    console.log('push remote')
                    this.fetchStack.push({projName, sheetName: refName, sheetSpec: this.sheets[refName]});
                } 

                allReferredReady = allReferredReady && (this.sheets[refName].status === 'ready');
            }

            if(allReferredReady){
                this.sheets[sheetName].import(this.sheets);
            }
            this.fetchTableWorker();
        } else {
            this.log('遇到了一个表没有定义location，是写代码的人的锅，请打电话联系他。')
        }
    }

    fetchTable = ({projName, sheetName, afterFetched}) => {

        this.afterFetched = afterFetched;
        this.fetchStack.push({projName, sheetName, sheetSpec: this.sheets[sheetName]});
        this.fetchTableWorker()
    }

    // parseRef(refString){
    //     let refName, refBody;

    //     [refName, refBody] = refString.split(':=');
    //     if (refBody !== undefined){
    //         this.refs[refName] = refBody;
    //         return refBody;
    //     }

    //     [refName, refBody] = refString.split('>>=');
    //     if (refBody !== undefined){
            
    //     }

    // }
}