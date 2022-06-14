const express = require('express');
const router = express.Router();


router.get('/create', (req, res)=>{
    res.send('This is create API')
});

module.exports = router;


