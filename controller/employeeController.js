var Joi = require("joi");
const express = require('express');
var router = express.Router();

let ar = [{id:1,name:"entry1"},{id:2,name:"entry2"},{id:3,name:"entry3"},{id:4,name:"entry4"}]

const schema = {name:Joi.string().min(3).required()};



router.get('/',(req,res)=>{
    res.json("this is the response from server.");
})

router.post('/',(req, res)=>{

    const entry = {id:ar.length+1,name:req.body.name};
    ar.push(entry);
    res.send(entry);
});

module.exports = router;