const mongoose = require('mongoose');


var employeeSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
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

module.exports = mongoose.model('Employee',employeeSchema);