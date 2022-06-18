const { validationResult, body} = require('express-validator');
const ResponseHandler = require('../../../utils/response-handlers')
const Endpoint = require('../../../utils/constants/Endpointers')
const ValidationErrorMessage = require('../../../utils/error-handler/ValidationErrorMessage')
const UserModel = require('../../../models/model.user')
const {failureResponse, exceptionResponse, successResponse} = require("../../../utils/response-handlers");
const FieldConstants = require('../../../utils/constants/FieldConstants')
const JWT  = require('jsonwebtoken')
const Config  = require('../../../config/env_config/config')

create = async (req, res)=>{
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            ResponseHandler.failureResponse(""+Endpoint.CREATE_USER.name,
                "Validation failed with errors",
                ValidationErrorMessage.getErrorMessage(errors.array()),
                400, req, res);
        }else{

            const isAlreadyExist = await UserModel.isEmailExistInDb(req.body.email)

            if(isAlreadyExist) return failureResponse(
                ""+Endpoint.CREATE_USER.url,
                "It seems this user email is already used",
                [],200,req, res)


            let createdUser = await UserModel.create({
                username: req.body.email,
                email: req.body.email,
                password: req.body.password,
                image: "some base 64 string goes here accordingly.",
            });


            let token = await JWT.sign({user_id: createdUser._id}, Config.app.app_secret);

            createdUser['token'] = token;

            let ObjectToReturn = {
                username: createdUser.username,
                email: createdUser.email,
                image: "some base 64 string goes here accordingly.",
                token:createdUser.token
            }

            ResponseHandler.successResponse(""+Endpoint.CREATE_USER.endpoint,
                "User created Successfully...",
                ObjectToReturn,
                200, req ,res)
        }
    }catch (e){
        exceptionResponse(""+Endpoint.CREATE_USER.endpoint,"Exception Occurs", [], e.message, req, res)
    }
}

login = async (req, res)=>{
    try{
        let errors = validationResult(req)
        if(!errors.isEmpty())
            return ResponseHandler.failureResponse(""+Endpoint.LOGIN_USER.name, "Validation failed with errors", ValidationErrorMessage.getErrorMessage(errors.array()), 400, req, res);

        let loggedInUser = await UserModel.findOne({email:req.body.email, password:req.body.password}).select('-__v -password -date')
        // user not exist in DB
        if(!loggedInUser)
            return failureResponse(""+Endpoint.LOGIN_USER.name,"User does not exist ",[], 200, req, res)


        let token = await JWT.sign({user_id:loggedInUser._id}, Config.app.app_secret);
        loggedInUser['token'] = token;

        return successResponse(""+Endpoint.LOGIN_USER.name, "User Logged in successfully",loggedInUser, 200, req, res)

    }catch (e){
      return exceptionResponse(""+Endpoint.LOGIN_USER.endpoint,"Exception Occurs", [],200, e.message, req, res)
    }
}

verifyEmail = async (req, res)=>{
    try{
        let errors = validationResult(req)
        if(!errors.isEmpty())
            return ResponseHandler.failureResponse(""+Endpoint.CHECK_EMAIL_EXIST.name, "Validation failed with errors", ValidationErrorMessage.getErrorMessage(errors.array()), 400, req, res);

        let isEmailExist = await UserModel.findOne({email:req.body.email})
        // user not exist in DB
        if(!isEmailExist)
            return failureResponse(""+Endpoint.CHECK_EMAIL_EXIST.name,"Email does not exist in our system ",false, 200, req, res)

        return successResponse(""+Endpoint.CHECK_EMAIL_EXIST.name, "Email found successfully",true, 200, req, res)

    }catch (e){
      return exceptionResponse(""+Endpoint.LOGIN_USER.endpoint,"Exception Occurs", [],200, e.message, req, res)
    }
}



module.exports = {create, login, verifyEmail}
