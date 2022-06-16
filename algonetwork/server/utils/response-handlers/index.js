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

module.exports = { successResponse, failureResponse, exceptionResponse}
