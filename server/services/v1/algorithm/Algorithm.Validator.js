const {body} = require('express-validator')
const Constants = require('../../../utils/constants')

const validateCreateAlgorithm = ()=>{
    return [
        body("category_id").exists({checkNull:true, checkFalsy:true}),
        body("problem").custom((item)=> Array.isArray(item)).withMessage("Array is expected"),
        body("problem").custom((item)=> {
            return item.every((e)=> {return e.hasOwnProperty("heading") &&
                e.hasOwnProperty("description") &&
                e.hasOwnProperty("backgroundColor") &&
                e.hasOwnProperty("collapsable") })
        }).withMessage("Please check key heading, description, backgroundColor, collapsable should exist for object"),
        body("level").exists({checkNull:true, checkFalsy:true}).withMessage("Invalid Value").isNumeric().withMessage("Value should be integer/Numeric"),
        body("solution").custom((item)=> Array.isArray(item)).withMessage("Array is expected"),
        body("solution").custom((item)=> {
            return item.every((e)=>{return e.hasOwnProperty("language") && e.hasOwnProperty("solutions") && Array.isArray(e.solutions) && e.solutions.every(element => element.hasOwnProperty('code'))});
        }).withMessage("Please check key language, solutions should exist for object")
    ]
}





module.exports = {validateCreateAlgorithm,}
