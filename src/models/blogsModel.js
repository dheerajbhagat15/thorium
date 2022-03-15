const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const blogsSchema = new mongoose.Schema( {

    title: {type: String, required: true}, 

    body: {type: String, required: true},

    author_id: {
        required: true,
        ref: "author",
        type: ObjectId
    },
    tags: Array,

    category:{type: String, required: true},

    subcategory : Array,
    
    isDeleted : {type :Boolean, default: false},
    deletedAt : {type: Date},

    isPublished: {type :Boolean, default: false},
    publishedAt : {type : Date}
    
    
    
    

}, { timestamps: true });


module.exports = mongoose.model('blog', blogsSchema) 
