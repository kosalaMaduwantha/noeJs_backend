const mongoose = require('./models');
const express = require('express');
const application = express();
const path = require('path');
const expressHandlbars = require('express-handlebars');
const bodyparser = require('body-parser');
const coursesController = require('./controllers/courses');

application.use(bodyparser.urlencoded({
    extended:true
}));

application.set('views', path.join(__dirname,'/views/'));
application.engine('hbs',expressHandlbars({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts",
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
                },
}));

application.set('view engine', 'hbs');

application.use('/Courses', coursesController);



application.listen(5000, (error)=>{
    if(!error){
        console.log("server is working");
    }
})

