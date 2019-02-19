let mysql = require('./connection_mysql').connection
let database = require('./connection_mysql').database

/**
 * 查询所有表并且返回当前表信息
 * @param cb
 */
function selectTable(cb) {
    let sql = 'show tables;'
    mysql.query(sql, (err, result) => {
        if (err) {
            throw new Error(err)
        }
        let table = []
        result.forEach(item => {
            table.push(item[`Tables_in_${database}`])
            // table.push(item.Tables_in_seal)
        })
        cb(table)
    })
}

/**
 * 查询列
 * @param table
 * @param cb
 */
function queryColumn(table, cb) {
    let sql = `SELECT
                    column_name columnName,
                    data_type dataType,
                    column_comment columnComment
               FROM
                    information_schema. COLUMNS
               WHERE
                    table_name = '${table}'
                     and table_schema = (select database()) order by ordinal_position`
    mysql.query(sql, (err, result) => {
        if (err) {
            throw new Error(err)
        }
        if (typeof cb === 'function') {
            cb(result)
        }
    })
}

/**
 * 查询表信息
 * @param tableName
 */
function queryTable(tableName, cb) {
    let sql = `SELECT
                table_name tableName,
                table_comment tableComment,
                create_time createTime
            FROM
                information_schema. TABLES
            WHERE
                table_schema = (SELECT DATABASE())
            AND table_name = '${tableName}'`
    mysql.query(sql, (err, result) => {
        if (err) {
            throw new Error(err)
        }
        if (typeof cb === 'function') {
            cb(result[0])
        }
    })
}

function downLoad() {
    selectTable((table) => {
        table.forEach(table => {
            queryColumn(table, (tableItem) => {
                let model = require('../class/model')
                model.createModel({
                    table,
                    column: tableItem
                })
            })
        })
    })
}

function test() {
    let model = require('../class/model')
    queryColumn('dealer_unified_interface', (column) => {
        model.createModel({
            table: 'dealer_unified_interface',
            column
        })
    })
}

module.exports = {
    selectTable,
    queryTable,
    queryColumn,
    downLoad,
    test
};
