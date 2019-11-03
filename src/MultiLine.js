export default class MultiLine {
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
