const express = require('express');
const mongoose = require('mongoose');

const CourseModel = mongoose.model("course");

const router = express.Router();

router.get('/addCourse', (req,res)=>{
    res.render('add-courses',{})
})


router.post('/addCourse', (req,res)=>{
    let course = new CourseModel();
    course.courseName = req.body.courseName;
    course.courseDuration = req.body.courseDuration;
    course.courseFee = req.body.courseFee;
    course.courseId = Math.ceil(Math.random()*1000000);
    course.save((error, doc)=>{
        if(!error){
            res.redirect('/Courses/list')
        }
        else{
            res.send("fuck dude");
        }
    })
    
})

router.get('/list', (req,res)=>{
    CourseModel.find((error, docs)=>{
        if(!error){
            
            console.log(docs);
            res.render('list', {data:docs});
        } 
        else{
            res.send(error);
        }
    })
    
})

module.exports = router;