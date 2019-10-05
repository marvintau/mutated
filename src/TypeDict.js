import Record from './Record';
import List from './List';
import Group from './Group';
import Header from './Header';

class Interval {
    constructor(start=new Date(), end=new Date()){
        this.start = start;
        this.end = end;
    }
}

/**
 * TypeDict
 * ========
 * 
 * TypeDict即类型字典。
 * 
 * 设计这个类的缘故是，我们无法通过Object直接检查其属性的类型，同时使用Flow
 * 或者将整个项目转换为TypeScript又显得overkilling。因此一个折衷的方案是，
 * 在需要进行类型检查的地方，特别是较为复杂的数据类型，或者需要依据类型获得
 * 其默认值时，我们通过TypeDict进行类型检测。
 * 
 * TypeDict所支持的数据类型包括:
 * 
 * 1. 基本类型: `Float`(浮点数), `Integer`(整数), `String`(字串)
 * 2. 日期类型：`Date`(日期), `Interval`(日期区间)
 * 3. 容器类型: `List`(列表), `Record`(记录), `Group`(分组), `Header`(表头)
 */

const ErrMsg = {
    unsupported(type){
        return `TypeDict: 发现了TypeDict所不支持的数据类型${cols[key]}，数据类型详见文档`
    }
}

export default class TypeDict {

    constructor(cols){

        const SuperTypeDict = {
            Float:   {type: Number,   falt: 0},
            Integer: {type: Number,   falt: 0},
            String:  {type: String,   falt: ""},

            Date:    {type: Date,     falt: new Date()},
            Interval:{type: Interval, falt: new Interval()},

            List:    {type: List,     falt: new List()},
            Record:  {type: Record},
            Group:   {type: Group},
            Header:  {type: Header},
            Unknown: {type: 'Unknown'}
        }

        for (let key in cols){
            if (SuperTypeDict[cols[key]] === undefined){
                throw Error(ErrMsg.unsupported(cols[key]));
            }
            this[key] = SuperTypeDict[key];
        }
    }

}