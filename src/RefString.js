export default class RefString {
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

        let matched = ast.refBody.match(/^[_A-Z]+$/);
        if (matched !== null){
            ast.refBody = {func: ast.refBody};
            return ast;
        }

        let [path, valExpr] = ast.refBody.split(':');
        if(valExpr === undefined){
            valExpr = path;
            path = undefined;
        }

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
