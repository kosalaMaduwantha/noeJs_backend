const mongoose = require('mongoose');

let courseSchema = new mongoose.Schema({
    courseName : {
        type:String,
        required:"Required"
    },
    courseId : {
        type:String
    },
    courseDuration : {
        type:String
    },
    courseFee : {
        type:String
    }
}
);

mongoose.model("course", courseSchema);