import Cols from './Cols';
import Body from './Body';
import Head from './Head';


const isTitle = (rec) => {
    return rec.get('value').desc.startsWith('#')
};

const getTitleLevel = (rec) => {
    return (rec.get('value').desc.match(/#/g) || []).length
};

const isSameTitleLevel = (recA, recB) => {
    return getTitleLevel(recA) === getTitleLevel(recB)
}

const breakCond = (rec) => (ref) => {
    let last = ref.last();
    return !isTitle(last) || isTitle(rec) && isSameTitleLevel(rec, last)
}

/**
 * Worksheet
 * ========
 * 
 * Worksheet来说，生成时只需要被引用的数据，而引用的数据总是通过自带
 * 的parse方法获得的。
 */
export default class WorkTable {
    constructor(referred, paths, attr={}){

        this.referred = referred;
        this.data = new Body(0);

        this.head = new Head({
            value: 'RefString'
        })
        this.head.setColProp({colDesc: '项目', paths}, 'value')

        this.attr = attr
    }

    parse(worksheetData){

        for (let i = 0; i < worksheetData.length; i++){
            let rec = new Cols(worksheetData[i], {head: this.head});
            if(worksheetData[i].item.startsWith('#')){
                rec.get('value').setDesc(worksheetData[i].item)
                rec.attr.isTitle = true;
            }
    
            let {list} = this.data.findBy('', {breakCond: breakCond(rec), getFunc: ref => ref.last()});
            list.push(rec);
    
        }
        this.data;
    }

    evaluate(){
        let refs = {};
        this.data.backTraverse((rec) => {
            rec.get('value').evaluate(this.referred, refs, rec.subs);
            return rec.copy();
        })
        // console.log(refs, 'reftable')
        return Body.from(this.data);
    }
}