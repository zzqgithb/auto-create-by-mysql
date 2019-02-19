class entity {
    constructor(prop, label, type, remark, characterMaximumLength) {
        this.val = prop
        this.label = label.transferString()
        this.type = this.dataDict(type)
        this.remark = remark
        this.maxLength = characterMaximumLength || 11// 最大长度
        this.processMaxLength()
    }

    // 根据dataType判断最大填写长度,
    processMaxLength() {
        let type = this.type.toLowerCase()
        if (type === 'int') {
            this.maxLength = 11
        } else if (type === 'varchar') {
            this.maxLength = this.maxLength > 2 ? ((this.maxLength / 2) | 0) : (this.maxLength)
        }
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
