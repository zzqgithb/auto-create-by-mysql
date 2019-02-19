let mysql = require('./query')

// 导出model与api接口
function downLoadModel(table) {
    // 制定表导出
    if (table) {
        getTableInfo(table).then(res => {
            downloadModel(res)
        })
    } else {
        // 查询表信息
        mysql.selectTable((tables) => {
            tables.forEach((table) => {
                // 根据表信息查询表备注
                getTableInfo(table).then(res => {
                    downloadModel(res)
                })
            })
        })
    }
}

/**
 * 获取表数据
 */
function getTableInfo(table) {
    return new Promise((reslove, reject) => {
        mysql.queryTable(table, (tableInfo) => {
            let createModel = require('../class/table')
            // 返回的model
            let model = createModel({
                tableName: tableInfo.tableName,
                remark: tableInfo.tableComment
            })
            // 查询列并格式化列
            mysql.queryColumn(table, (column) => {
                let entityClass = []
                let entity = require('../class/entity')
                column.forEach((item) => {
                    let {columnName, dataType, columnComment, CHARACTER_MAXIMUM_LENGTH} = item
                    columnName = columnName.underlineToHump()
                    model.prop.push(columnName)
                    entityClass.push(new entity(columnName, columnComment, dataType, columnComment, CHARACTER_MAXIMUM_LENGTH))
                })
                model.column = entityClass
                model.propStr = model.prop.toString()
                reslove(model)
            })
        })
    })
}

function downloadModel(Model) {
    let path = require('path');
    //
    let classModel = require('fs').readFileSync(path.resolve(__dirname, '../') + '/template/Model.ejs', 'utf8')  //先读文件
    let api = require('fs').readFileSync(path.resolve(__dirname, '../') + '/template/Api.ejs', 'utf8')  //先读文件

    let index = require('fs').readFileSync(path.resolve(__dirname, '../') + '/template/Index.ejs', 'utf8')  //先读文件

    let ejs = require('ejs');

    let classModelEjs = ejs.render(classModel, Model)

    let indexModelEjs = ejs.render(index, Model)
    let apiEjs = ejs.render(api, {
        modules: Model.tableNameUpperCase
    })
    writeFileToLocal('entity', classModelEjs, Model.tableNameUpperCase)
    writeFileToLocal('api', apiEjs, Model.tableName)
    writeFileToLocal('view', indexModelEjs, Model.tableName, 'vue')
}

// 写出class文件到本地
function writeFileToLocal(filePath, str, table, type) {
    let fs = require('fs')
    if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath);
    }
    fs.writeFile(`./${filePath}/${table}.${type || 'js'}`, str, (err) => {
        if (err) {
            throw err;
        }
        console.log(`Write ${table} success`);
    });
}

module.exports = {
    downLoadModel
}
