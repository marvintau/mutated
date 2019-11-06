import List from './List';
import Tabs from './Tabs';

export default class Body extends List {

    constructor(...args){
        super(...args);
    }

    findBy(key, matchValue){

        if (Array.isArray(matchValue)){

            if (matchValue.some(e => typeof e !== 'string')){
                throw Error('findBy: found non-string value in path');
            }

            let listRef = this, destRec = undefined;
            for (let elem of matchValue){
                let trimmed = elem.trim();
                destRec = listRef.find(e => e.get(key).valueOf() === trimmed);
                if (destRec === undefined){
                    break;
                }
                listRef = destRec.subs;
            }
            return destRec;

        } else {
            return this.find(e => e.get(key).valueOf() === matchValue)
        }
    }

    mapCol(key){
        return this.map(e => e.get(key));
    }

    isColSame(key){
        return this.mapCol(key).every((v, i, a) => v.valueOf() == a[0]);
    }

    orderBy(key, isAscending=true){
        this.sort((prev, next) => {
            let prevVal = prev.get(key),
                nextVal = next.get(key);

            if(prevVal.constructor === String && prevVal.match(/^[0-9]+$/)){
                prevVal = parseFloat(prevVal);
            }

            if(nextVal.constructor === String && nextVal.match(/^[0-9]+$/)){
                nextVal = parseFloat(nextVal);
            }

            let order = isAscending ? 1 : -1

            let res = (prevVal > nextVal) ? 1 : (prevVal < nextVal) ? -1 : 0;

            return order * res;
        })

        return Body.from(this);
    }

    grip(key, {desc='noname', style='paginator'}={}){

        let group = {};

        for (let i = 0; i < this.length; i++){

            let actualKey = key.constructor === Function ? key(this[i]) : this[i].get(key);

            if(!(actualKey in group)){
                group[actualKey] = new Body(0)
            }
            group[actualKey].push(this[i]);
        }

        return new Tabs(group, {desc, style});
    }

    uniq(key) {
        
        let uniq = {};
        for (let i = 0; i < this.length; i++){

            let actualKey = key.constructor === Function ? key(this[i]) : this[i].get(key);

            uniq[actualKey] = this[i];
        }

        return Body.from(Object.values(uniq));
    }

    cascade(colKey) {

        // grip使用了layerFunc，将列表分为几代（Generation）
        let layers = this.orderBy(colKey).grip((rec) => rec.get(colKey).length).vals();

        // 每相邻的两代之间两两比较，如果没有找到父辈的孩子会被弃掉。
        let children;
        for (children = layers.pop(); layers.length > 0; children = layers.pop()) {
            let parents = layers.pop();

            // 如果是一个之前flatten过的List，那么此时的父层结点仍然会保存子层结点，
            // 的引用。这是flatten本身的设计。如果反复添加子层结点肯定会造成错误。
            // 所以此处我们重设parents的subs来确保安全。
            // 
            // 需要注意这个操作并不会影响到叶子结点，因此如果叶子结点中保存的是明细
            // 表也不会受到影响。这符合我们之前的叶子结点只保存明细表的约定。

            for (let i = 0; i < parents.length; i++){
                parents[i].subs = new Body(0);
            }

            while (children.length > 0) {
                let child = children.pop();
                for (let i = 0; i < parents.length; i++){
                    let parent = parents[i];
                    if (child.get(colKey).startsWith(parent.get(colKey))) parent.subs.push(child);
                }
            }
            layers.push(parents);
        }
        // 返回祖先一代。
        return children;
    }

    // 把cascaded过的列表展开
    flatten(){

        const stack = Body.from(this).reverse();
        const res = new Body(0);
        while (stack.length) {
            const curr = stack.pop();

            res.push(curr);
            stack.push(...List.from(curr.subs).reverse());
        }

        return res;
    }

    // 把cascaded过的列表按路径展开。需要注意的是，只保留到叶子结点的路径
    flattenPath(){
        const stack = Body.from(this).map(e => [e]);
        const res = new Body(0);

        while (stack.length) {
            
            const path = stack.pop();
            const [curr, ...prev] = path;

            if(curr.subs.constructor.name !== 'Body' || curr.subs.length === 0){
                res.push(path);
            } else {
                stack.push(...curr.subs.map(next => [next, curr, ...prev]));
            }
        }

        return res.map(e => List.from(e)); 
    }

    copy(){
        
        for (let i = 0; i < this.length; i++){
            this[i] = this[i].copy();
            this[i].subs = this[i].subs.copy();
        }
        return new Body(...this);
    }
    
    backTraverse(func){
        for (let i = 0; i < this.length; i++){
            this[i].subs.backTraverse(func);
            this[i] = func(this[i]);
        }
    }
}