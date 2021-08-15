const express = require('express');
const mySqlConnection = require('../connection');
const Router = express.Router();
const mysqlConnection = require('../connection');

Router.get('',(req,res)=>{
    mySqlConnection.query("SELECT * FROM people", (error,rows,fields)=>{
        if(!error){
            res.send(rows);
        }
        else{
            console.log("query didnt execute"+ error);
        }
    })
})

module.exports = Router;