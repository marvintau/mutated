import List from './List';
import Record from './Record';

export default class Header extends List {

    constructor(...args){
        super(...args);
    }

    createRecord(){

        let defVals = {
            String: '',
            Integer: 0,
            Number: 0,
            Array: [],
            Object: {},
            Undefined: undefined,
            Boolean: false,
            Date: new Date(),
            DateInterval: '0-0-0'
        }

        let cols = {};
        for (let i = 0; i < this.length; i++){
            let dataType = this[i].dataType ? this[i].dataType : 'String';
            cols[this[i].colKey] = defVals[dataType];
        }

        return new Record(cols);
    }

    sum(list){

        let newRec = this.createRecord();

        for (let i = 0; i < this.length; i++){
            let key = this[i].colKey,
                type = this[i].type,
                mapped = list.map(e => e.get(key));

            if (type === 'String'){
                let res = mapped.every((e, i, a) => e === a[0]) ? mapped[0] : '...';
                newRec.set(key, res);
            } else if (type === 'Number'){
                let sum = mapped.reduce((acc, e) => acc + e, 0);
                newRec.set(key, sum);
            } else {
                newRec.set(key, '...');
            }
        }

        return newRec;
    }
}