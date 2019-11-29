import List from './List';
import Tabs from './Tabs';

const getRandSamples = (list, samples) => {
    let indice = [];

    while (indice.length < samples){
        let newSample = parseInt((Math.random()*samples));
        if(indice.indexOf(newSample) === -1) indice.push(newSample);
    }
    return Body.from(indice.map(e => list[e]));
}

const samplesWithinSum = (list, key, sumLim) => {
    let newList = [], sum = 0;
    
    for (let item of list) {
        let {cols} = item;
        if(sum += cols[key] > sumLim) break;
        newList.push(item);
    }
    
    return newList;
}

const findSingle = (list, string) => ({
    rec: list.find(e => e.get(key).valueOf() === string),
    list: list
})

const isArrayOfString = (list) =>
    Array.isArray(list) && list.every(e => typeof e === 'string');

const iterateWithPathArray = (list, key, pathArray) => {

    let listRef = list, destRec = undefined;
    for (let elem of pathArray){
        destRec = listRef.find(e => e.get(key).valueOf() === elem);
        if (destRec === undefined){
            break;
        }
        listRef = destRec.subs;
    }
    return {rec: destRec, list:listRef};
}

const reach = (list, {breakCond, getFunc}) => {
    
    if(breakCond === undefined || getFunc === undefined){
        return {rec: undefined, list:undefined}
    }

    let listRef = list, descRec = undefined;
    while(listRef.length > 0 && !(breakCond(listRef))){
        descRec = getFunc(listRef),
        listRef = descRec.subs;
    }
    return {rec: descRec, list: listRef};
}

const parseString = (str) => 
    (typeof str === 'string' || str.constructor === String) && str.match(/^[0-9]+$/)
    ? parseFloat(str) : str

export default class Body extends List {

    constructor(...args){
        super(...args);
        this.ops = [];
    }

    findBy(key, pattern){    
        return (typeof pattern === 'string')
        ? findSingle(this, pattern)
        : isArrayOfString(pattern)
        ? iterateWithPathArray(this, key, pattern)
        : reach(this, pattern)
    }

    isColSame(key){
        return this.map(e => e.get(key).valueOf()).every((v, i, a) => v == a[0]);
    }

    orderBy(key, isAscending=true){


        this.sort((prev, next) => {
            let prevVal = parseString(prev.get(key)),
                nextVal = parseString(next.get(key)),
                order = isAscending ? 1 : -1

            return (prevVal > nextVal) ? order : (prevVal < nextVal) ? -order : 0;
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
            let actualKey = (key.constructor === Function) ? key(this[i]) : this[i].get(key);
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

            for (let i = 0; i < parents.length; i++)
                if(Array.isArray(parents[i].subs) || parents[i].subs === undefined){
                    parents[i].subs = new Body(0);
                }

            while (children.length > 0) {
                let child = children.pop();
                for (let i = 0; i < parents.length; i++){
                    let parent = parents[i];
                    
                    if (child.get(colKey).startsWith(parent.get(colKey))) try{
                        parent.subs.push(child)
                    }catch{
                        console.log(parent);
                        throw Error('found')
                    }
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
            this[i].subs = this[i].subs.backTraverse(func);
            this[i] = func(this[i]);
        }

        return new Body(...this);
    }

    addOp({type, args}){
        this.ops.push({type, args});
    }

    removeOp(index){
        (index === undefined)
        ? this.ops.pop()
        : this.ops.splice(index, 1)
    }

    applyOp(){

        const sort = ({key, order}) => {
            return this.orderBy(key, order);
        }

        const filter = ({method, key, arg}) => {
            switch(method){
                case '>=':
                case '<=':
                    return this.filter(({cols}) => eval(`${cols[key]}${method}(${arg})`));
                case 'rand':
                    return getRandSamples(this, arg);
                case '&>=':
                case '&<=':
                    return samplesWithinSum(this, arg);
            }
        }

        for (let {type, args} of this.ops){
            newBody = (type === 'sort')
            ? sort(args)
            : (type === 'filter')
            ? filter(args)
            : newList;
        }
    }

}