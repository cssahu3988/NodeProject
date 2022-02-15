const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(process.env.DBConnections,{useNewUrlParser:true},(err)=>{
    if(!err){console.log("DB successfully created . ")}
    else{console.log("DB error "+err)}
});

require('./employee.model');