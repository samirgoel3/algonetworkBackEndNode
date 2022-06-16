const { validationResult, body} = require('express-validator');
const ResponseHandler = require('../../../utils/response-handlers')
const Endpoint = require('../../../utils/constants/Endpointers')
const ValidationErrorMessage = require('../../../utils/error-handler/ValidationErrorMessage')
const UserModel = require('../../../models/model.user')
const {failureResponse} = require("../../../utils/response-handlers");
const FieldConstants = require('../../../utils/constants/FieldConstants')

create = async (req, res)=>{
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



        const createdUser = await  UserModel.create({
            username: req.body.email,
            email: req.body.email,
            password:req.body.password,
            image: "some base 64 string goes here accordingly.",
        })

        delete createdUser.toObject.email

        ResponseHandler.successResponse(""+Endpoint.CREATE_USER.endpoint,
            "User created Successfully",
            createdUser,
            200, req ,res)
    }
}

module.exports = {create}
