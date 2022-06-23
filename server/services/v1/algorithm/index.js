const Endpoint = require('../../../utils/constants/Endpointers')
const {exceptionResponse, failureResponse, successResponse} = require("../../../utils/response-handlers");
const ModelAlgorithm = require("../../../models/model.algorithm");
const ModelAlgoCategory = require("../../../models/model.algocategory");
var mongoose = require('mongoose');


create = async (req, res)=>{
    try{
        let checkCategory = await ModelAlgoCategory.find( {_id:""+req.body.category_id});
        if(!checkCategory)
            failureResponse(Endpoint.CREATE_ALGORITHM.endpoint, "Category Id not found", checkCategory, 200, req, res)

        let algorithm = await ModelAlgorithm.create(req.body);
        if(!algorithm){
            failureResponse(Endpoint.CREATE_ALGORITHM.endpoint,"Failed to create algorithm", [], 200, req, res)
        }
        else{
            successResponse(Endpoint.CREATE_ALGORITHM.endpoint, "Algorithm Successfully Created", algorithm, 200, req, res)
        }
    }catch (e){
        exceptionResponse(""+Endpoint.CREATE_ALGORITHM.name,"Exception Occurs", e.message,200 , req, res)
    }
}

getAlgorithmById = async (req, res)=>{
    try{
        let algorithm = await ModelAlgorithm.find( {_id:""+req.params.category_id});
        if(!algorithm)
            failureResponse(Endpoint.GET_ALGORITHM.endpoint, "Algorithm Not Found", algorithm, 200, req, res)

            successResponse(Endpoint.GET_ALGORITHM.endpoint, "Algorithm found", algorithm, 200, req, res)


    }catch (e){
        exceptionResponse(""+Endpoint.GET_ALGORITHM.name,"Exception Occurs", e.message,200 , req, res)
    }
}



module.exports = {create, getAlgorithmById}
