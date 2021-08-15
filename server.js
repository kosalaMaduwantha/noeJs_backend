const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const mysqlConnection = require('./connection');
const peopleRoutes = require('./routes/people');

let app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('/people',peopleRoutes);


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

app.listen(5000, ()=>{
    console.log("server is working");
});


