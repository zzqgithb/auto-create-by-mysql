class entity {
    constructor(prop, label, type, remark) {
        this.val = prop
        this.label = label.transferString()
        this.type = this.dataDict(type)
        this.remark = remark
    }

    dataDict(type) {
        let retType = ''
        switch (type) {
            case 'varchar':
                retType = 'text';
                break;
            case 'int':
                retType = 'number';
                break;
            case 'float':
                retType = 'text';
                break;
            case 'double':
                retType = 'text';
                break;
            case 'text':
                retType = 'textarea';
                break;
            case 'datetime':
                retType = 'datetime';
                break;
            default:
                retType = 'hidden'
        }
        return retType
    }
}

module.exports = entity