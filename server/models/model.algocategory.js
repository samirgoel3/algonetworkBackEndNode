const  mongoose =  require('mongoose');
const { Schema } = mongoose;

const algoCategoriesSchema = new Schema({
    name:{type:String, require:true, unique:true},
    color:{type:String, require:true, unique:true},
    icon:{type:String, require:true},
    active:{type:Boolean, default:true},
}, {timestamps: true});


module.exports = mongoose.model('algo-category-schema', algoCategoriesSchema)
