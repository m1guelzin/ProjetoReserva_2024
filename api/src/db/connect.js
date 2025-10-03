const mysql = require('mysql2');

const pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'{seu-usuario-do-bcd}',
    password:'{sua-senha-do-bcd}',
    database:'senai'
})

module.exports = pool;
