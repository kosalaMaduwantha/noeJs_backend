const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

let people = {people:[{name: "praveen"}]};

app.get('/people',(req,res)=>{
    res.json(people);
    res.end();
})

app.get('/people/:name',(req,res)=>{
    res.json({name:req.params.name});
    res.end();
})

app.post('/people',(req,res)=>{
    if(req.body && req.body.name){
        people.people.push(
            {name:req.body.name}
        )
    }
    console.log(req.body.name);
    res.json(people);
    res.end("post data");
})


app.listen(5000, ()=>{
    console.log("server is working");
});

