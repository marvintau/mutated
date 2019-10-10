import Group from './Group';

export default class List extends Array{

    constructor(...args){
        if (args[0] instanceof Array || args[0] instanceof List){
            super(...args[0]);
        } else {
            super(...args);
        }
    }

    /**
     * last
     * @param {number} backwardIndex 反向索引，会被自动trim到[1, this.length]的范围
     *                               从而确保最终的值在[0, this.length-1]的范围内。
     */
    last(backwardIndex=1){
        backwardIndex = Math.max(Math.min(backwardIndex, 1), this.length);
        return this[this.length - backwardIndex];
    }

    ordr(func, order=1){
        this.sort((a, b) => {
            let indexA = func(a),
                indexB = func(b);

            return indexA < indexB ? -order : indexA > indexB ? order : 0;
        })

        return new List(...this);
    }

    grip(func, {desc='noname', style='paginator'}={}){

        let group = {};

        for (let i = 0; i < this.length; i++){

            let key = func(this[i]);
            if(!(key in group)){
                group[key] = new List(0)
            }
            group[key].push(this[i]);
        }

        return new Group(group, {desc, style});
    }


    uniq(func) {
        
        let uniq = {};
        for (let i = 0; i < this.length; i++){
            uniq[func(this[i])] = this[i];
        }

        let list = new List();
        for (let key in uniq){
            list.push(uniq[key]);
        }
        return list;
    }

    cascade(layerFunc, gatherFunc) {

        // grip使用了layerFunc，将列表分为几代（Generation）
        let layers = this.ordr(layerFunc).grip(layerFunc).vals().reverse();

        // 每相邻的两代之间两两比较，如果没有找到父辈的孩子会被弃掉。
        let descendants;
        for (descendants = layers.shift(); layers.length > 0; descendants = layers.shift()) {
            let ancestors = layers[0];
            while (descendants.length > 0) {
                let entry = descendants.shift();
                for (let maybeParent of ancestors) if (gatherFunc(entry, maybeParent)) {
                    maybeParent.addChild(entry);
                }
            }
        }

        // 返回祖先一代。
        return new List(descendants);
        // return layers;
    }

    flatten(){

        const stack = new List(...this);
        const res = [];
        while (stack.length) {
            const next = stack.shift();
            res.push(next);
            stack.push(...next.heir);
        }

        return new List(res);
    }

    join(from, {fromCol, thisCol}){

        // 1. build up a dictionary with entry of 
        //    value of the column. 
        let fromDict = new Map();
        for (let i = from.length-1; i >= 0; i--){
            fromDict.set(fromCol, from[i][fromCol]);
        }

        // 2. find the entry which has same value
        //    in given column, combine two record
        //    together.
        for (let i = this.length-1; i >= 0; i--){
            let thisColVal = this[i][thisCol];
            if(fromDict.has(thisColVal)){
                Object.assign(this[i], fromDict.get(thisColVal));
            }
        }

        return new List(this);
    }

    insert(index, newRec){
        this.splice(index, 0, newRec);
        return new List(this);
    }

    swap(index, dir=1){
        if(dir===1){
            if (index < this.length - 1) {
                [this[index], this[index+1]] = [this[index+1], this[index]];
            }    
        } else {
            if (index > 0) {
                [this[index - 1], this[index]] = [this[index], this[index - 1]];
            }    
        }
        return new List(this);
    }

    remove(index){
        this.splice(index, 1);
        return new List(this);
    }
}