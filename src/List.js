import Group from './Group';

class List extends Array {
    constructor(...args){
        super(...args);
    }

    last(){
        return this[this.length - 1];
    }

    grip(func, desc='noname', style='paginator'){

        let group = {};

        for (let i = 0; i < this.length; i++){

            let key = func(this[i]);
            if(!(key in group)){
                group[key] = new List(0)
            }
            group[key].push(this[i]);
        }

        return new Group(desc, group, style);
    }

    tros(func, order=1){
        if (func === undefined){
            // quite useful when trying to sort a list of
            // strings in alphabetic (lexicographical) order.
            // 
            // especially when strings are digits, which will
            // be automatically parsed into numbers when the
            // comparison function given.
            this.sort();
        } else {
            this.sort((a, b) => (func(a) - func(b))*order);
        }

        return this.newRef(this);
    }

    uniq(func) {
        
        let uniq = {};
        for (let i = 0; i < this.length; i++){
            uniq[func(this[i])] = this[i];
        }

        let list = new List(0);
        for (let key in uniq){
            list.push(uniq[key]);
        }

        return list;
    }

    dups(func){
        let list = new List(0);

        for (let i = 0; i < this.length-1; i++){
            if (func(this[i]) === func(this[i+1])){
                list.unshift(this[i]);
            }
        }

        return list;  
    }

    cascade(layerFunc, gatherFunc) {

        let layers = this.grip(layerFunc).vals();
        layers.reverse();

        // The descendants are on the head of List, by finding and
        // getting merged into their ancestors, the ancestors become
        // new descandants.
        for (var descendants = layers.shift(); layers.length > 0; descendants = layers.shift()) {
            let ancestors = layers[0];
            while (descendants.length > 0) {
                let entry = descendants.shift();
                for (let maybeParent of ancestors) if (gatherFunc(entry, maybeParent)) {
                    maybeParent.subs.push(entry);
                }
            }
        }

        return descendants;
    }

    flatten(){

        const stack = new List(...this);
        const res = new List(0);
        while (stack.length) {
            const next = stack.shift();
            res.push(next);
            if (next.subs.length) {
                stack.push(...next.subs);
            }
        }

        return res;
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
    }

    insert(index, newRec){
        this.splice(index, 0, newRec);
        return this.slice();
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
        return this.newRef(this);
    }

    remove(index){
        this.splice(index, 1);
        return this.slice();
    }

    newRef(self){
        console.log(self)
        let Constructor = self.constructor;
        return Object.assign(new Constructor(), self);
    }
}

export default List;