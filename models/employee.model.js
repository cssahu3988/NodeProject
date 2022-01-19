const mongoose = require('mongoose');


var employeeSchema = new mongoose.Schema({
    fullName:{
        type: String
    },
    mobile:{
        type: String
    },
    city: {
        type: String
    },
    email: {
        type:String
    }
});

mongoose.model('Employee',employeeSchema);