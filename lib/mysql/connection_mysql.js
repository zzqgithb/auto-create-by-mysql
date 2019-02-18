let mysql = require('mysql');
let connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    // database: 'seal'
    database: 'renren_security'
})
connection.connect()

module.exports = connection