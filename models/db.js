const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Employees',{useNewUrlParser:true},(err)=>{
    if(!err){console.log("DB successfully created . ")}
    else{console.log("DB error "+err)}
});

require('./employee.model');