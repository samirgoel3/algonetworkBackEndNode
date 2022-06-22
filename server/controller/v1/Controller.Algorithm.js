const express = require('express');
const router = express.Router();
const AlgorithmService  = require('../../services/v1/algorithm')
const AuthGuard = require('../../middlewares/authGaurd')
const Constants = require('../../utils/constants')
const {throwValidationErrorResponse} = require('../../utils/response-handlers')
const {validateCreateAlgorithm} = require('../../services/v1/algorithm/Algorithm.Validator')


router.post(Constants.EndPoints.GET_ALGORITHM.endpoint, AuthGuard.authenticateClientToken,
    validateCreateAlgorithm(),
    throwValidationErrorResponse,
    AlgorithmService.create);


module.exports = router;


