const {validationResult} = require("express-validator");
const ValidationErrorMessage = require("../error-handler/ValidationErrorMessage");
const Endpoint = require("../constants/Endpointers");
const AlgoCategoryModel = require("../../models/model.algocategory");
const successResponse = (apiMame, message, data, status, req, res)=>{
    res.status(status).json(
        {
            result:1,
            message:message,
            response:data
        }
    );
}

const failureResponse = (apiName, message, data, status, req, res)=>{
    res.status(status).json(
        {
            result:0,
            message:message,
            response:data
        }
    );
}

const exceptionResponse = (apiMame, message, data, status, req, res)=>{
    res.status(status).json(
        {
            result:2,
            message:message,
            response:data
        }
    );
}


const throwValidationErrorResponse = async (req, res, next)=>{
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            failureResponse(""+Endpoint.CREATE_ALGO_CATEGORY.name,
                "Validation failed with errors",
                ValidationErrorMessage.getErrorMessage(errors.array()),
                400, req, res);
        }else{
            return next();
        }
    }catch (e){
        exceptionResponse(""+Endpoint.CREATE_ALGO_CATEGORY.name,"Exception Occurs", ""+e.message,200 , req, res)
    }

}





module.exports = { successResponse, failureResponse, exceptionResponse, throwValidationErrorResponse}
