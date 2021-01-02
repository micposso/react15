var express = require('express');
var app = express();

// set query to create database on script run
const dbName = "bdaydb";
const createDB = "CREATE DATABASE " + dbName;
const createTable = `CREATE TABLE People (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Year varchar(255),
    Day varchar(255),
    Sign varchar(255)
);`;

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    const dbconfig = {
      server: "localhost",
      user: "sa",
      password: "Camilita8004!",
      port: 1433
    };

    // connect to your database
    sql.connect(dbconfig, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query(createDB, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});