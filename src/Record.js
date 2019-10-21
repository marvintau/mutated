import List from "./List";

export default class Record {
    
    constructor(cols={}, {head={}, heir=new List(), subs}={}){

        if (cols instanceof Record){
            Object.assign(this, cols);
        } else {
            this.cols = {}
            for (let colKey in head){
                let val = cols[colKey] === null ? undefined : cols[colKey];

                // 尽管会尽可能地在这一步之前排除，但是我们仍然会遇到在生成Record时，
                // 有的Number类型的字段值是一个包含逗号的字符串，如 "123,456.78"。
                // 我们在这里处理掉它。在找到更稳妥的数据处理方法之前请保留这个
                // workaround。
                if (head[colKey].type === Number){
                    if (val === undefined){
                        val = '0';
                    }
                    val = val.toString().replace(/,/g, '');
                }

                this.cols[colKey] = val === undefined ? undefined : new head[colKey].type(val);
            }
    
            this.head = head;
            this.subs = subs;    
            this.heir = heir;
        }        
    }

    set(key, value){
        let Cons = this.head[key].type;
        this.cols[key] = new Cons(value);
        return new Record(this);
    }

    get(key){
        return this.cols[key];
    }

    table(){
        return this.subs;
    }

    hasChild(){
        return this.heir.length > 0
    }
    
    hasTable(){
        return this.subs !== undefined;
    }

    isLeaf(){
        return !(this.hasChild() || this.hasTable());
    }

    addChild(rec){
        this.heir.push(rec);
    }
    
    keys(){
        return Object.keys(this.cols);
    }

    valueOf(){
        let entries = Object.entries(this.cols).map(([k, v]) => [k, v.valueOf()])
        return Object.fromEntries(entries);
    }
}