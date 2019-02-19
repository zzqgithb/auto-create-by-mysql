class entity {
    constructor(prop, label, type, remark, characterMaximumLength) {
        this.val = prop
        this.label = label.transferString()
        this.type = this.dataDict(type)
        this.remark = remark
        this.maxLength = characterMaximumLength || 11// 最大长度
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
