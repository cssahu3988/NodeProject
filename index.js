require ('./models/db');
const express = require('express');
const app = express();
const employeeController = require('./controller/employeeController');

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
});

app.use(express.json());

app.use('/employees', employeeController);