const  mongoose =  require('mongoose');
const { Schema } = mongoose;

const algorithmSchema = new Schema({
    category_id:{type:String, require:true},
    problem:{type:JSON, require:true},
    solution:{type:JSON, require:true},
    active:{type:Boolean, default: true},
    level:{type:Number, require:true},
    date: { type: Date, default: Date.now },
}, {timestamps: true});



module.exports = mongoose.model('algorithm', algorithmSchema)
