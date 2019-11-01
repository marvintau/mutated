import Group from './Group';

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

    ordr(func, order=1){
        this.sort((a, b) => {
            let indexA = func(a),
                indexB = func(b);

            return indexA < indexB ? -order : indexA > indexB ? order : 0;
        })

        return List.from(this);
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

        let list = new List(0);
        for (let key in uniq){
            list.push(uniq[key]);
        }
        return list;
    }

    cascade(layerFunc, parentTestFunc, addChildFunc=(c, p)=>{p.addChild(c)}) {

        // grip使用了layerFunc，将列表分为几代（Generation）
        console.log('length', this.length);
        console.time('grip');
        let layers = this.ordr(layerFunc).grip(layerFunc).vals();
        console.timeEnd('grip');
        // 每相邻的两代之间两两比较，如果没有找到父辈的孩子会被弃掉。

        let descendants;
        for (descendants = layers.pop(); layers.length > 0; descendants = layers.pop()) {
            let ancestors = layers.pop();

            // 如果是一个之前flatten过的List，那么此时的ancestors里肯定是
            // 有children的，如果反复添加children肯定会造成错误。所以此处
            // 我们应当吧ancestors中的heir清零，然后在下一个步骤中重新添加。
            for (let i = 0; i < ancestors.length; i++){
                ancestors[i].heir = [];
            }

            console.time('comparisonLevel');
            while (descendants.length > 0) {
                let child = descendants.pop();
                for (let i = 0; i < ancestors.length; i++){
                    let parent = ancestors[i];
                    if (parentTestFunc(child, parent)) addChildFunc(child, parent)
                }
            }
            for (let i = 0; i < ancestors.length; i++){
                ancestors[i].subs = undefined;
            }
            console.timeEnd('comparisonLevel')
            layers.push(ancestors);
        }

        // 返回祖先一代。
        return descendants;
    }

    // 把cascaded过的列表展开。
    flatten(getChildren=(e) => e.heir){

        const stack = List.from(this).reverse();
        const res = new List(0);
        while (stack.length) {
            const curr = stack.pop();

            res.push(curr);
            stack.push(...List.from(getChildren(curr)).reverse());
        }

        // 需要注意的是，res里是展开的每一条记录，但记录中所保存的
        // 对子层记录的引用没有改变。
        return res;
    }

    // 把cascaded过的列表按路径展开。需要注意的是，只保留到叶子结点的路径
    flattenPath(getChildren=(e) => e.heir, isLeaf=(e) => e.heir.isEmpty()){
        const stack = List.from(this).map(e => [e]);
        const res = new List(0);

        console.time('flattenPath');

        while (stack.length) {
            
            const path = stack.pop();
            const [curr, ...prev] = path;

            if(isLeaf(curr)){
                res.push(path);
            } else {
                stack.push(...getChildren(curr).map(next => [next, curr, ...prev]));
            }
        }

        console.timeEnd('flattenPath');

        return res.map(e => List.from(e)); 
    }

    outer(from, {fromCol, thisCol}){

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

        return List.from(this);
    }

    insert(index, newRec){
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
        this.splice(index, 1);
        return List.from(this);
    }

    toObject(){
        return Object.fromEntries(this);
    }

}