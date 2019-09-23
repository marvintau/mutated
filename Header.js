import List from './List';
import Record from './Record';

export default class Header extends List {

    constructor(...args){
        super(...args);
    }

    makeRecord(){

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
}