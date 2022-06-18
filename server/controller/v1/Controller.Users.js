const express = require('express');
const router = express.Router();
const UserService  = require('../../services/v1/users')
const UserValidator = require('../../services/v1/users/User.Validator')
const AuthGuard = require('../../middlewares/authGaurd')
const Constants = require('../../utils/constants')
const {body} = require('express-validator')



// api routes that will run without token authentication
// router.post('/create', AuthGaurd.authenticateClientToken);

    router.post(Constants.EndPoints.CREATE_USER.endpoint, UserValidator.validateCreateUser() , UserService.create);

    router.post(Constants.EndPoints.LOGIN_USER.endpoint, UserValidator.validateLoginUser() , UserService.login);

module.exports = router;


