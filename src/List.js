export default class List extends Array{

    constructor(...args){
        super(...args);
    }

    /**
     * last
     * @param {number} backwardIndex 反向索引，会被自动trim到[1, this.length]的范围
     *                               从而确保最终的值在[0, this.length-1]的范围内。
     */
    last(backwardIndex=1){
        backwardIndex = Math.max(Math.min(backwardIndex, this.length), 1);
        return this[this.length - backwardIndex];
    }

    isEmpty(){
        return this.length === 0;
    }

    insert(index, newRec){
        console.log(index, newRec, 'inserting');
        this.splice(index, 0, newRec);
        return List.from(this);
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
        return List.from(this);
    }

    remove(index){
        if(this.length > 1){
            this.splice(index, 1);
        }
        return List.from(this);
    }

    toObject(){
        return Object.fromEntries(this);
    }
}