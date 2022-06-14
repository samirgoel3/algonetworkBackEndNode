const express = require('express');
const router = express.Router();

const userController = require('../../controller/v1/Users');

router.use('/user', userController);


module.exports = router;

