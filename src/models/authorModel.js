const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const authorSchema = new mongoose.Schema( {

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },

    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"]
    },

     email: {type: String,
            required : true,
            unique : true,
            match:/.*\@.*\..*/

            
     
          },

    password : { type: String, required: true }



}, { timestamps: true });


module.exports = mongoose.model('author', authorSchema)


