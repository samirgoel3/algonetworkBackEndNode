const {body} = require('express-validator')
const Constants = require('../../../utils/constants')

const validateCreateUser = ()=>{
    return [
        body(Constants.PostingParams.EMAIL).isEmail(),
        body(Constants.PostingParams.PASSWORD).isLength({ min: 6 })
    ]
}

const validateLoginUser = ()=>{
    return[
        body(Constants.PostingParams.EMAIL).isEmail(),
        body(Constants.PostingParams.PASSWORD).isLength({ min: 6 })
    ]
}

const validateEmail = ()=>{
    return[
        body(Constants.PostingParams.EMAIL).isEmail()
    ]
}

module.exports = {
    validateCreateUser, validateLoginUser, validateEmail
}
