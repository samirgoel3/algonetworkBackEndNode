const Endpoint = require('../../../utils/constants/Endpointers')
const {exceptionResponse} = require("../../../utils/response-handlers");

create = async (req, res)=>{
    try{
        res.send(req.body)
    }catch (e){
        exceptionResponse(""+Endpoint.GET_ALGORITHM.name,"Exception Occurs", e.message,200 , req, res)
    }
}



module.exports = {create}
