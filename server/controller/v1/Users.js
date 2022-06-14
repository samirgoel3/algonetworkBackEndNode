const express = require('express');
const router = express.Router();
const UserService  = require('../../services/v1/users')
const AuthGaurd = require('../../middlewares/authGaurd')


// router.get('/create', UserService.create);
router.get('/create', AuthGaurd.authenticateClientToken);

module.exports = router;


