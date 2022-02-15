var Joi = require("joi");
const express = require('express');
var router = express.Router();
const Employee = require('../models/employee.model');

let ar = [{id:1,name:"entry1"},{id:2,name:"entry2"},{id:3,name:"entry3"},{id:4,name:"entry4"}]


function validate(body){
    const schema = {
        fullName:Joi.string().min(3).max(30).required(),
        mobile:Joi.string().min(13).max(14).required(),
        city:Joi.string().min(3).max(50),
        email:Joi.string().min(5).max(50).required()
    };
    const result = Joi.validate(body, schema);
    return result;
}

router.get('/',async (req,res)=>{
    try {
        const employees = await Employee.find().limit(100);
        res.status(200).json(employees);
    }catch (e) {
        res.status(500).json({error:e});
    }
})

router.get('/:id',async (req,res)=>{
    try {
        const employees = await Employee.findById(req.params.id);
        res.status(200).json(employees);
    }catch (e) {
        res.status(500).json({error:e});
    }
})

router.post('/',async (req, res)=>{
    if(validate(req.body).error){
        res.status(400).send(validate(req.body).error.details[0].message);
        return;
    }
    console.log(req.body);
    const employee = new Employee({
        fullName: req.body.fullName,
        mobile:req.body.mobile,
        city:req.body.city,
        email:req.body.email
    });
    try {
        const savedEmployess = await employee.save();
        res.status(200).json(savedEmployess);
    }catch(e) {
        res.status(500).json({error:e});
    }
    
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

router.delete('/:id', async (req, res) => {
    try {
        const deletedEmployess = await Employee.deleteOne({_id: req.params.id});
        res.status(200).json(deletedEmployess);
    }catch (e) {
        res.status(500).json({error:e});
    }
})

module.exports = router;