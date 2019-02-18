/**
 * @Description: 实例化model类
 * @return ${return_type}
 * @throws
 * @author ZiQin Zhai
 * @date
 */

class jsModel {
    constructor({table, column}) {
        this.table = table
        this.column = column
        this.columnArr = [] // 保存构造函数中的入参
        this.init()
    }

    // 初始化
    init() {
        let str = ''
        this.table = this.table.underlineToHump()
        this.column.forEach(item => {
            let {columnName, dataType, columnComment} = item
            columnName = columnName.underlineToHump()
            this.columnArr.push(columnName)
            str += `this.${columnName} = ${this.normolizeData(columnName, dataType, columnComment)}`
        })
        this.downLoadFile(str)
    }

    // 格式化数据返回
    normolizeData(columnName, dataType, columnComment) {
        let entity = require('./entity')
        let model = new entity(columnName, columnComment, dataType)
        let modelStr = '{\n'
        Object.keys(model).forEach(key => {
            // 如果key是val时候 不添加''
            modelStr +=
                key === 'val' ? `${key}: ${model[key]},\n`
                    : `${key}: '${model[key]}',\n`
        })
        return modelStr.slice(0, modelStr.length - 2) + '\n}\n'
    }

    // 创建成项目class形式
    downLoadFile(str) {
        let constructorStr = `import Model from './Model'\n
export default class ${this.table}Model extends Model {
    constructor({${this.columnArr.toString()}}) {
        super()
        ${str}\n
    }\n
}\n
${this.retFunction(this.table + 'Model')}
`
        this.writeFileToLocal(constructorStr)
    }

    // 返回实例化对象的function
    retFunction(constr) {
        let Model = this.table.charAt(0).toUpperCase() + this.table.slice(1)
        let columnProp = ''
        this.columnArr.forEach(item => {
            columnProp += `${item}: Model.${item},\n`
        })
        let str = `export function create${this.table}(${Model} = {}) {
    return new ${constr}({
                ${columnProp.slice(0, -1)}
      })
    }`
        return str
    }

    // 写出文件到本地
    writeFileToLocal(str) {
        let fs = require('fs')
        if (!fs.existsSync('entity')) {
            fs.mkdirSync('entity');
        }
        fs.writeFile(`./entity/${this.table}.js`, str, (err) => {
            if (err) {
                throw err;
            }
            console.log(`Write ${this.table} success`);
        });
    }
}

function createModel(Model) {
    return new jsModel({
        table: Model.table,
        column: Model.column
    })
}

module.exports = {
    createModel
}