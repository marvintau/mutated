import Cols from './Cols'

import Path from './Path';
import RefString from './RefString';
import MultiLine from './MultiLine';
import Body from './Body';

export default class Head {

    constructor(colsTypeSpec){

        const types = {
            Number,
            String,
            Date,
            Path,
            RefString,
            MultiLine
        }

        // 未来修改Path的时候也要修改Form中的SelectPath

        for (let key in colsTypeSpec){
            if (!(colsTypeSpec[key] in types)){
                console.warn(`Head: found non-existing type "${colsTypeSpec[key]}", typo suggested.`, Object.keys(types))
            }
            this[key] = {type: types[colsTypeSpec[key]]}
        }
    }

    len(){
        return Object.keys(this).length;
    }

    lenDisplayed(){
        return Object.values(this).filter(e => !(e.hidden || e.isTitle)).length;
    }

    sum(list){

        const typeSum = {
            String(list){
                let res = true;
                for (let i = 0; i < list.length - 1; i++){
                    res = res && (list[i] !== undefined && list[i+1] !== undefined && list[i].valueOf() == list[i+1].valueOf());
                    if (!res) break;
                }
                return res ? list[0] : '...';
            },
            Number(list){
                let sum = 0;
                for (let i = 0; i < list.length; i++){
                    sum += list[i];
                }
                return sum;
            }
        }

        let resCols = {};
        for (let key in this){
            let keyList = list.map(e => e.get(key));

            let typeName = this[key].type.name,
                sumFunc = typeSum[typeName];

            if (sumFunc !== undefined){
                resCols[key] = typeSum[this[key].type.name](keyList);
            } else {
                resCols[key] = '...';
            }
        }

        return new Cols(resCols, {head: this});
    }

    /**
     * setColProp
     * ============
     * @param {string|Object} col 字段名，或者一个包含有若干字段名的Object。对于作为Object的col，同样的props将赋给每一个字段。
     * @param {Object} props 将为字段设置的属性。如果col是一个Object，那么props将被忽略。
     */
    setColProp(props={}, col={}){
        
        const availableProps = {
            isExpandToggler: false,
        }

        if (col in this){
            Object.assign(this[col], {colDesc: col}, availableProps, props);
        } else for (let colName in col) if (colName in this){
            Object.assign(this[colName], {colDesc: colName}, availableProps, props);
        }
    }

    createCols(cols){
        return new Cols(cols, {head: this});
    }

    createBody(data){
        return Body.from(data.map(e => this.createCols(e)));
    }
}