export default class MultiLine {
    constructor(arg=""){

        if (arg instanceof MultiLine){
            this.lines = arg.lines;
        } else{
            this.lines = arg.split(/[,;] */)
        }
    }

    valueOf(){
        return this.lines.join('\n');
    }

    setLines(func){
        this.lines = this.lines.map(func)
    }
}
