const mysql = require('mysql');

function newConnection() {
    let conn = mysql.createConnection({
        host: '34.133.203.107',
        user: 'root',
        password: 'rootpassword123',
        database: 'doodlestuff'
    });
    return conn;
}

module.exports = newConnection;