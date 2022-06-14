const express = require('express')
const route = express.Router();
const tester = require('../../services/v1/tester')

route.get('/create-test-token',tester.createToken)

module.exports = route
