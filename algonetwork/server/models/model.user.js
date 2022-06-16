const  mongoose =  require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username:{type:String, require:true},
    email:{type:String, require:true, unique:true},
    password:{type:String, require:true},
    image:{type:String, require:true},
    token:{type:String, require:true},
    date: { type: Date, default: Date.now },
}, {timestamp: true});


userSchema.statics.isEmailExistInDb = async function(email){
    try {
        const user = await this.findOne({email})
        if(user) return true
        return false;
    }catch (e){
        return false;
    }
}

module.exports = mongoose.model('user', userSchema)
