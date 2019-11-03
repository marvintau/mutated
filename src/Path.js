export default class Path extends Array {
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
