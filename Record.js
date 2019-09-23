import List from './List';

class Record {
    constructor(cols, spec={}){
        this.cols = cols;

        let {subs=new List(0), tabs, attr={}} = spec;
        this.attr = attr;
        this.subs = subs;
        this.tabs = tabs;
    }

    get(key){
        return this.cols[key];
    }

    set(key, value){
        this.cols[key] = value;
        return this.newRef(this);
    }

    setAttr(attrKey, attrValue){
        this.attr[attrKey] = attrValue;
        return this.newRef(this);
    }

    type(typeDict, key){
        let elem = typeDict.find(e => e.colKey===key);
        // console.log(key, 'record type');
        if(elem && elem.attr && elem.attr.type !== undefined){
            return elem.attr.type;
        } else {
            return typeCheck(this.cols[key]);
        }
    }

    trim(keys){
        let newCols = {};
        for (let key in this.cols){
            if (keys.indexOf(key) === -1){
                newCols[key] = this.cols[key];
            }
        }
        this.cols = newCols;
        return this.newRef(this);
    }

    pick(keys){
        let newCols = {};
        for (let key of keys){
            if (key in this.cols){
                newCols[key] = this.cols[key];
            } else if('oldKey' in key){
                let {oldKey, newKey} = key;
                if(oldKey in this.cols){
                    newCols[newKey] = this.cols[oldKey];
                }
            }
        }
        this.cols = newCols;
        return this.newRef(this);
    }

    keys(){
        return Object.keys(this.cols);
    }

    toList(head){
        return new List(...head.map(e => ({...e, value: this.cols[e.colKey]})));
    }

    toObject(){
        return Object.assign({}, this.cols);
    }


    tab(data, head){
        this.tabs = new Sheet(data, {head});
        return this.newRef(this);
    }

    newRef(self){
        let Constructor = self.constructor;
        return Object.assign(new Constructor(), self);
    }

}

export default Record;