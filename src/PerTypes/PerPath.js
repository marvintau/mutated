export default class PerPath {
    /**
     * 专门用于保存MultiSelect的值
     * @param {Array} path 路径的初始值
     */
    constructor(path=[0]){
        this.path = path;
    }

    select(level, value){
        this.path = this.path.slice(0, level-1).concat(value);
    }

    set(path){
        this.path = path;
        return new PerPath(path);
    }

    valueOf(){
        return this.path;
    }
}