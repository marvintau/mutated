import Record from './Record'
import List from './List';

/**
 * Schema
 * ------
 * @param {Object} colsTypeSpec 字段名称及其对应类型。可选的类型包括：
 * ```
 * 'Float' | 'Integer' | 'String' | 'Date' | 'Interval'
 * ```
 * 请特别注意大小写。
 */

class MultiLine {
    constructor(string=""){
        this.lines = string.split(/[,;] */)
    }

    valueOf(){
        return this.lines.join('\n');
    }

    setLines(func){
        this.lines = this.lines.map(func)
    }
}

class RefString {
    constructor(string=''){

        if (string.constructor.name === 'RefString' || string.string !== undefined){
            this.string = string.string;
        } else {
            this.string = string.toString();
        }

    }

    set(newString){
        this.string = newString;
        return new RefString(newString);
    }

    valueOf(){
        return this.string;
    }

    display(){
        let strippedString = this.string.replace(/\s+/g, '')

        let [refName, refBody] = strippedString.split('@');

        let ast = {
            refName, refBody
        }

        if (refBody === undefined){
            ast.refName = '',
            ast.refBody = refName;
        } 

        let matched = ast.refBody.match(/(SUB)|(SUMSUB)|(NONE)/);
        if (matched !== null){
            ast.refBody = {func: ast.refBody};
            return ast;
        }

        let [path, valExpr] = ast.refBody.split(':');
        if(valExpr === undefined){
            valExpr = path;
            path = undefined;
        }
        // console.log(path, 'display')
        let splittedPath;
        if(path !== undefined){
            splittedPath = path.split('/').map(dir => dir.split('&')).filter(e => e[0].length > 0);
        }

        ast.refBody = {
            path: splittedPath,
            valExpr
        }

        return ast;
    }
}

class Path extends Array {
    constructor(...args){
        if (args.length === 0){
            super(0);
            this.push(0);
        } else if (Array.isArray(args[0])) {
            super(0);
            this.push(...args[0]);
        } else {
            super(...args);
        }
    }
}

export default class Head {

    constructor(colsTypeSpec){

        const types = {
            Float:    Number,
            Integer:  Number,
            String:   String,
            Date:     Date,
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
                    res = res && (list[i].valueOf() == list[i+1].valueOf());
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
            }
        }

        return new Record(resCols, {head: this});
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
        for (let key in this){
            if (!(propName in this[key])) return {res: false, key}
        }
        return {res: true};
    }

    createRecord(colsData){

        if (colsData === undefined){
            colsData = {};
            for (let key in this){
                colsData[key] = new this[key].type();
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