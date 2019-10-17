import List from "./List";

export default class Record {
    
    constructor(cols={}, {head={}, heir=new List(), subs}={}){

        if (cols instanceof Record){
            Object.assign(this, cols);
        } else {
            this.cols = {}
            for (let colKey in head){
                let val = cols[colKey] === null ? undefined : cols[colKey];
                this.cols[colKey] = new head[colKey].type(val);
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