//require ('./models/db');
const express = require('express');
const app = express();
const employeeController = require('./controller/employeeController');
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Server is running on port 3000")
});

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Welcome to the serve")
})

app.use('/employees', employeeController);