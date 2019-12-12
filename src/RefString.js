

const matchRef = (string) => {
    // note that the reference name split by @ is optional
    let [refName, refBody] = string.split('@');
    if(refBody === undefined){
        refBody = refName;
        refName = undefined;
    }

    let refPath = matchPath(refBody);
    if(refPath === null){
        refBody = {expr: refBody};
    } else {
        refBody = refPath
    }

    return {
        refName,
        refBody
    }
}

const matchPath = (pathString) => {

    // the colon in path is mandatory. Otherwise returns null,
    // and pathString will be fallback to expression.
    if (pathString.search(/:/) > 0){
        let [pathBody, refValue] = pathString.split(':');

        return (pathBody = matchPathDir(pathBody)) ? {pathBody, refValue} : null;

    } else {
        return null;
    }
}

const matchPathDir = (pathString) => {
    if(pathString.match(/([\/&].+)+/)){
        return pathString.split('/').slice(1)
        .map(dir => dir.split('&'));
    } else {
        return null;
    }
}

const NaNto0 = (number) => {
    let parsed = parseFloat(number);
    return isNaN(parsed) ? 0 : parsed;
};

const outer = (listOfLists) => {

    if (listOfLists.some(elem => !Array.isArray(elem))){
        throw Error('outer必须得用在list of lists上')
    }

    // wrap the innermost level with list. note that the
    // value inside first should be a string in our use
    // case.
    let [first, ...rest] = listOfLists,
        res = first.map(e => [e]);

    // for every element from list, make it a list that
    // every existing list of res concat with it.
    for (let list of rest){
        res = res.map(e => list.map(l => e.concat(l))).flat();
    }

    return res;
}

const calcVal = (expr, rec) => {

    const dict = {
        '期初' : 'mb',
        '期末' : 'me',
        '借方' : 'md',
        '贷方' : 'mc'
    }

    let expression = expr.replace(/([^+-]+)/g, "(rec.get(dict['$&']))");
    return eval(expression)
}

const evalFunc = (expr, subs) => {
    if(expr === 'SUMSUB'){
        let value = subs.map(e => NaNto0(e.get('value').value))
        .reduce((acc, e) => acc+e, 0);
        return {value, type:'NORMAL'};
    }
    if(expr === 'SUB1'){
        let value = NaNto0(subs[0].get('value').value);
        return {value, type:'NORMAL'};
    }
    if(expr === 'NONE'){
        return {value:''};
    }
    return {
        value:'不能识别的函数',
        type:'ERROR'
    };
}

const evalExpr = (expr, refs) => {
    let value, type;
    try {
        value = eval(expr.replace(/\$/g, 'refs.'));
        type = 'NORMAL';
        if(typeof value === 'boolean'){
            type === 'VALID'
        }
        if(typeof value === 'object'){
            throw Error(`Value cannot be object. You likely created a regex`);
        }
    } catch (err) {
        value = '不能识别的表达式';
        type = 'ERROR';
    }

    return {value, type};
}

export default class RefString {
    constructor(arg=''){

        if (arg.constructor.name === 'RefString' || arg.string !== undefined){
            Object.assign(this, arg);
        } else {
            this.string = arg.toString();
        }

        this.type = 'NORMAL';
        this.value = '';
        this.note = '';
        this.desc = '';
    }

    set(newString){
        this.string = newString;
        return new RefString(newString);
    }

    setDesc(desc){
        this.desc = desc;
    }

    valueOf(){
        return this.string;
    }

    toAST(){
        return matchRef(this.string.replace(/\s+/g, ''))
    }

    evaluate(referredBody, refTable, subs){

        let ast = this.toAST();

        let {refBody:{pathBody, refValue, expr}, refName} = ast;
        // 如果ref代表一个path
        if(pathBody){
            let res = outer(pathBody)
                .map(path => {
                    let {rec} = referredBody.findBy('ccode_name', path),
                        val = rec ? calcVal(refValue, rec) : undefined;

                    return { path: path.join('/')+":"+refValue, val}
                })
                .reduce(({note, value}, {path, val}) => {
                    return val === undefined ? {note:[path, ...note], value} : {note, value:value+val}
                }, {note:[], value: 0});

            this.value = res.value;
            
            if(res.note.length > 0){
                this.type = 'WARN';
                this.note = res.note.join('\n');
            } else {
                this.type = 'NORMAL';
                this.note = '';
            }

        } else if (expr !== undefined) {
            if (!isNaN(parseFloat(expr))){
                this.value = parseFloat(expr);
                this.type = 'NORMAL';
            } else if (expr.match(/^[A-Z0-9]+$/g)){
                let {value, type} = evalFunc(expr, subs);
                this.value = value;
                this.type = type;
            } else {
                let {value, type} = evalExpr(expr, refTable)
                this.value = value;
                this.type = type;
            }
        } else {
            this.value = '不能识别的表达式';
            this.type = 'ERROR';
        }

        if(refName !== undefined){
            refTable[refName] = this.value;
        }
    }
}
