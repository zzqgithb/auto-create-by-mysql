class TableModel {
    constructor({tableName, remark, column, prop = []}) {
        // 表名称
        this.tableName = tableName.underlineToHump()
        this.tableNameUpperCase = tableName.underlineToHump().charAt(0).toUpperCase() + tableName.underlineToHump().slice(1)
        // 表备注
        this.remark = remark
        // 表字段
        this.column = column
        // 表字段
        this.prop = prop
        this.propStr = prop
    }
}

/**
 * 创建表属性
 * @param Table
 * @returns {*}
 */
function createTable(Table) {
    return new TableModel({
        tableName: Table.tableName,
        remark: Table.remark,
        column: Table.column,
        prop: Table.prop
    })
}

module.exports = createTable