import Body from "./Body";

export default class Cols {
    
    constructor(cols={}, {head, subs=new Body(0), attr={}}={}){

        if (cols instanceof Cols){
            Object.assign(this, cols);
        } else {
            this.cols = {}
            for (let colKey in head){

                let val = cols[colKey] === null ? undefined : cols[colKey];

                // 如果是一则出错信息，那么直接保留下来，并确保最终能显示出来。
                if(val!== undefined && (val.error !== undefined || val.valid !== undefined)){
                    this.cols[colKey] = val;
                    continue;
                }
                
                // 尽管会尽可能地在这一步之前排除，但是我们仍然会遇到在生成Cols时，
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
            this.attr = attr;
        }        
    }

    copy(){
        let cols = Object.assign({}, this.cols),
            attr = Object.assign({}, this.attr),
            subs = Body.from(this.subs);
        return new Cols(cols, {head: this.head, subs, attr});
    }

    set(key, value){
        let Cons = this.head[key].type;
        this.cols[key] = new Cons(value);
        return new Cols(this);
    }

    get(key){
        return this.cols[key];
    }
    
    keys(){
        return Object.keys(this.cols);
    }

    subsType(){
        return this.subs.constructor.name;
    }

    valueOf(){
        let entries = Object.entries(this.cols).map(([k, v]) => [k, v.valueOf()])
        return Object.fromEntries(entries);
    }
}