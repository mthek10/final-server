const mysql = require('mysql2');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql123",
    database:"requests_db"
})

module.exports = db;