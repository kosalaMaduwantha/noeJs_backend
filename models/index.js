const mongoose = require('mongoose');
const courseModel = require('./course.model');

mongoose.connect('mongodb://localhost:27017/edureka',{ useUnifiedTopology: true }, (error)=>{
    if(!error){
        console.log("database connection established succssfully");
    }
    else{
        console.log("database error");
    }
});

module.exports = mongoose;