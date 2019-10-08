import Record from './Record'
import List from './List';

import PerString from './PerTypes/PerString';
import PerInteger from './PerTypes/PerInteger';
import PerFloat from './PerTypes/PerFloat';
import PerInterval from './PerTypes/PerInterval';
import PerDate from './PerTypes/PerDate';

/**
 * Schema
 * ========
 * 
 * Schema即类型字典。
 * 
 * ------
 * 
 * ## 0. Rationale
 * 
 * 设计这个类的缘故是，我们无法通过Object直接检查其属性的类型，同时使用Flow
 * 或者将整个项目转换为TypeScript又显得overkilling。因此一个折衷的方案是，
 * 在需要进行类型检查的地方，特别是较为复杂的数据类型，或者需要依据类型获得
 * 其默认值时，我们通过Schema进行类型检测。
 * 
 * 在我们的项目中，它主要用来辅助创建一个Record。Schema对象实例本身创建之后
 * 也不应该被更改。因此我们使用了Object.freeze使之成为一个immutable的对象。
 * 
 * 对于需要和数据库对接的项目，这也是一个比较便利的ORM工具。
 * 
 * ------
 * 
 * ## 1. 数据类型
 * 
 * Schema所支持的数据类型包括:
 * 
 * * 基本类型: `PerFloat`(浮点数), `PerInteger`(整数), `PerString`(字串)
 * * 日期类型：`PerDate`(日期), `PerInterval`(日期区间)
 * 
 * 说明：
 * 
 * 1. PerInterval是通过两个Date对象相减得到的以millisecond为单位的整数。
 * 
 * 2. Schema是一个non-nullable的数据结构。当遇到undefined或者null
 * 时，会自动将字段转换为对应数据类型的默认值。
 * 
 * 3. 由于JS的primitive数据类型充满奇怪的行为，这里我们将原始的数据类型
 *    通过继承来剔除掉一些默认的行为。
 */

export default class Schema {

    constructor(colsTypeSpec){

        const types = {
            PerFloat,
            PerInteger,
            PerString,
            PerDate,
            PerInterval,
        }

        for (let key in colsTypeSpec){
            let type = types[colsTypeSpec[key]]
            this[key] = {type}
        }
    }

    /**
     * setFieldProp
     * ============
     * @param {string|Object} field 字段名，或者一个包含有若干字段名的Object。对于后者，Object中的key是字段名，而value则是对应字段的属性。
     * @param {Object} props 将为字段设置的属性。如果field是一个Object，那么props将被忽略。
     */
    setFieldProp(field, props={}){
        
        const availableProps = {
            display: 'Normal',
            style:   'Normal',
            expandControl: false,
        }

        if (field in this){
            Object.assign(this[field], {fieldDesc: field}, availableProps, props);
        } else if (fieldName instanceof Object){
            for (let fieldName in field) if (fieldName in this){
                Object.assign(this[fieldName], {fieldDesc: fieldName}, availableProps, field[fieldName]);
            }
        }
    }

    createRecord(colsData){
        return new Record(colsData, {schema:this});
    }

    // for test purpose only
    createTableFromColumnLists({length, table}){
        let recs = [];
        for (let i = 0; i < length; i++){
            let rec = {};
            for (let key in table){
                rec[key] = table[key][i];
            }
            recs.push(new Record(rec, {schema: this}));
        }
        return new List(recs);
    }
}