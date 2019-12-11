export default class Sheet {
    constructor({
        referred={},
        type,
        isSavable=false,
        isExportable=false,
        status='none',
        location='local',
        importProc,
        exportProc,
        forceReload=false,
        desc='无描述',
        hidden=false
    }){

        // 表预设的描述信息
        this.referred = referred;
        this.importProc = importProc;
        this.exportProc = exportProc;
        this.type = type;
        this.desc = desc;
        this.hidden = hidden;

        // 提供控制选项
        this.isSavable = isSavable;
        this.isExportable = isExportable;

        // fetching所需的属性
        this.status = status;
        this.location = location;
        this.forceReload = forceReload;
    }

    // 只有存放在remote的数据才会使用receive方法
    receive(data, part, afterRecevied){

        // 如果首次使用receive，初始化blobs
        this.blobs = this.blobs || [];
        this.blobs.push(data);

        if(part === 'LAST'){
            let blob = new Blob(this.blobs);
            
            blob.text()
            .then(text => {
                this.data = JSON.parse(text);
                this.status = 'ready';
                afterRecevied();
            })
        }
    }

    import(sheets){
        this.tables = this.importProc(sheets);
        this.status = 'ready';
    }
}