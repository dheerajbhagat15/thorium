const mongoose = require('mongoose');

const userModel = new mongoose.Schema( {
    firstName: String,
    balance: {type : Number, default : 100}, 
    address: String,
    age : Number,
    gender : { type : String,
        enum : [ "male", "female", "other"]},
    isFreeAppUser : {
        type : Boolean,
        default : false
    }    
        

}, { timestamps: true });

module.exports = mongoose.model('userModel', userModel) 



