const mysql = require('mysql');
const express = require('express');


let mySqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"edureka",
    multipleStatements:true
})

mySqlConnection.connect((error)=>{
    if(!error){
        console.log("database connection has been established");
    }
    else{
        console.log("database connection error");
    }
});

module.exports = mySqlConnection;