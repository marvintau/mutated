import Body from "./Body";

/**
 * The Group class
 * ---------------
 * set of key-value pairs with a description
 * 
 * Note: In this project, a Group instance is always created by a Body. Because
 *       the value of each entry should be either Group or Body at the same time.
 *       Thus you should never create group object manually.
 *  
 */
export default class Tabs {
    
    constructor(group, {desc='无描述', style="paginator"}={}){

        if (group instanceof Tabs){
            Object.assign(this, group);
        } else {
            this.group = group;
            this.desc = desc;
            this.style = style;
        }
    }

    orderBy(tabPath, key){
        let ref = this;
        if(Array.isArray(tabPath)){
            for (let elem of tabPath) ref = ref.get(elem);
        } else {
            ref = ref.get(tabPath);
        }

        if(ref.constructor !== Body){
            throw Error('Tabs.orderBy.tabPath: 找到的数据不是Body，不能排序')
        }

        // 对Body按key进行排序。我们忽略掉Body.orderBy的返回值
        // 让Tabs的orderBy返回一个新Tabs对象
        ref.orderBy(key);
        return new Tabs(this);
    }

    get(key){
        return this.group[key];
    }

    set(key, newValue){
        this.group[key] = newValue;
        return new Tabs(this);
    }

    vals(){
        return Body.from(Object.values(this.group));
    }

    keys(){
        return Object.keys(this.group);
    }

    iter = (func) => {

        let newGroup = Object.assign({}, this.group);

        const entries = Object.entries(newGroup);

        for (let i = 0; i < entries.length; i++){
            let [key, value] = entries[i];            
            newGroup[key] = func(key, value);
        }

        return new Tabs(newGroup, {desc: this.desc, style:this.style});
    }

    grap() {
        return Body.from(this.vals().flat());
    }
}