const _ = require('lodash')
const var_one = process.env.NODE_ENV || "local"
const myConfiguration = require('./local')

console.log(myConfiguration)

const mergeConfig = _.merge(myConfiguration, var_one)


