const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({


    firstName: {type :String, required:true},
    lastName: String,
    mobile: String,
    emailId: String,
    password: String,
    gender: String,
    isDeleted: Boolean,
    age: Number,
    posts : { type : [], default:[]}
    
  


}, { timestamps: true });

module.exports = mongoose.model('newUser', userSchema)