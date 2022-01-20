var Joi = require("joi");
const express = require('express');
var router = express.Router();

let ar = [{id:1,name:"entry1"},{id:2,name:"entry2"},{id:3,name:"entry3"},{id:4,name:"entry4"}]


function validate(body){
    const schema = {
        name:Joi.string().min(3).max(30).required()
    };
    const result = Joi.validate(body, schema);
    return result;
}

router.get('/',(req,res)=>{
    res.send(ar);
})

router.post('/',(req, res)=>{
    if(validate(req.body).error){
        res.status(400).send(validate(req.body).error.details[0].message);
        return;
    }
    const entry = {id:ar.length+1,name:req.body.name};
    ar.push(entry);
    res.send(entry);
});

router.put('/:id',(req, res)=>{
    if(validate(req.body).error){
        res.status(400).send(validate(req.body).error.details[0].message);
        return;
    }
    const a = ar.find(c=> c.id===parseInt(req.params.id));
    if(!a){
        res.send("id not present in the database.");
        return;
    }
    a.name = req.body.name;
    res.send(a);
});

router.delete('/:id', (req, res) => {
    const a = ar.find(c=> c.id===parseInt(req.params.id));
    if(!a){
        res.send("id not present in the database.");
        return;
    }
    const index = ar.indexOf(a);
    ar.splice(index, 1);
    res.send("element has been removed.");
})

module.exports = router;