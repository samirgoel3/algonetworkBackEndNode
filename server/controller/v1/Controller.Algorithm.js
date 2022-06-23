const express = require('express');
const router = express.Router();
const AlgorithmService  = require('../../services/v1/algorithm')
const AuthGuard = require('../../middlewares/authGaurd')
const Constants = require('../../utils/constants')
const {throwValidationErrorResponse} = require('../../utils/response-handlers')
const {validateCreateAlgorithm, validateGetAlgorithm} = require('../../services/v1/algorithm/Algorithm.Validator')


router.post(Constants.EndPoints.CREATE_ALGORITHM.endpoint,
    AuthGuard.authenticateClientToken,
    validateCreateAlgorithm(),
    throwValidationErrorResponse,
    AlgorithmService.create);

router.get(Constants.EndPoints.GET_ALGORITHM.endpoint+":category_id?",
    AuthGuard.authenticateClientToken,
    validateGetAlgorithm(),
    throwValidationErrorResponse,
    AlgorithmService.getAlgorithmById)

module.exports = router;


