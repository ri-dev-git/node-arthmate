const mongoose= require('mongoose');

const userSchema = mongoose.Schema({
    name:String,
    mobileNumber:String
})

module.exports=mongoose.model('users',userSchema)