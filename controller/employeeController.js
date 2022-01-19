const express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.json("this is the response from server.");
})

module.exports = router;