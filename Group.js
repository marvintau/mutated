import List from "./List";

/**
 * The Group class
 * ---------------
 * set of key-value pairs with a description
 * 
 * Note: In this project, a Group instance is always created by a List. Because
 *       the value of each entry should be either Group or List at the same time.
 *       Thus you should never create group object manually.
 *  
 */
export default class Group {
    
    constructor(desc, group){        
        this.desc = desc;
        this.group = group;
    }

    get(key){
        return this.group[key];
    }

    set(key, newValue){
        let newGroup = {...this.group, [key]: newValue};
        return new Group(this.desc, newGroup)
    }

    vals(){
        return Object.values(this.group);
    }

    keys(){
        return Object.keys(this.group);
    }

    iter = (func) => {

        const entries = Object.entries(this.group);

        for (let i = 0; i < entries.length; i++){
            let [key, value] = entries[i];            
            this.group[key] = func(key, value);
        }

        return this.newRef(this);
    }

    grap() {

        let list = new List(0),
            vals = this.vals();
        for (let i = 0; i < vals.length; i++){
            list.unshift(vals[i]);
        }
        return list;
    }

    newRef(self){
        let Constructor = self.constructor;
        return Object.assign(new Constructor(), self);
    }

}