var mysql = require('mysql');

const mysqlconnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Jbderas12A',
    database: 'venta_mangas',
    port: '3306'
});

mysqlconnection.connect(function(err){
    if(!err)
    {
        console.log("Connection to DB sucefull");
    }
    else
    {
        console.log(err)
        return;
    }
});

module.exports = mysqlconnection;