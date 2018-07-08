/**
 * Created by wtx on 2018/7/8.
 */

var mysql = require('mysql');
var connection = mysql.createConnection({
host: '192.168.8.101',
user: 'root',
password: '',
database: 'db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});
