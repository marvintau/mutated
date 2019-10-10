import Record from './Record'
import List from './List';

import {PerString, PerInteger, PerFloat, PerInterval, PerDate, PerPath} from './PerTypes/index'
/**
 * Schema
 * ------
 * @param {Object} colsTypeSpec 字段名称及其对应类型。可选的类型包括：
 * ```
 * 'Float' | 'Integer' | 'String' | 'Date' | 'Interval'
 * ```
 * 请特别注意大小写。
 */

export default class Head {

    constructor(colsTypeSpec){

        const types = {
            Float:    PerFloat,
            Integer:  PerInteger,
            String:   PerString,
            Date:     PerDate,
            Interval: PerInterval,
            Path:     PerPath,
        }

        for (let key in colsTypeSpec){
            this[key] = {type: types[colsTypeSpec[key]]}
        }
    }

    len(){
        return Object.keys(this).length;
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

    checkColProp(propName){
        console.log(this);
        for (let key in this){
            if (!(propName in this[key])) return {res: false, key}
        }
        return {res: true};
    }

    createRecord(colsData){

        if (colsData === undefined){
            colsData = {};
            for (let key in this){
                colsData = new this[key].type();
            }
        }

        return new Record(colsData, {head: this});
    }

    // for test purpose only
    createTableFromColumnLists({length, table}){
        let recs = [];
        for (let i = 0; i < length; i++){
            let rec = {};
            for (let key in table){
                rec[key] = table[key][i];
            }
            recs.push(new Record(rec, {head: this}));
        }
        return new List(recs);
    }
}