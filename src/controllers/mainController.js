const mongoose = require('mongoose');
const authorModel = require("../models/authorModel")
const blogsModel = require("../models/blogsModel")




const createAuthor = async function (req, res) {
    try {
        let data = req.body
        console.log(data)
        if ( Object.keys(data).length != 0) {
            let savedData = await authorModel.create(data)
            res.status(201).send({ msg: savedData })
        }
        else res.status(400).send({ msg: "BAD REQUEST"})
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ error: err.message })
    }
}

//creating blog
const createblogs = async function (req, res) {
    try {
        let data = req.body
        console.log(data)
        if ( Object.keys(data).length != 0) {
            let savedData = await blogsModel.create(data)
            res.status(201).send({ msg: savedData })
        }
        else res.status(400).send({ msg: "BAD REQUEST"})
    }
    catch (err) {
        console.log("This is the error :", err.message)
        res.status(500).send({ error: err.message })
    }
}

const getBlog =async function(req,res){        
    
const data = req.query
const filter = {isdeleted:false, isPublished:true,  data
}


const blog = await blogsModel.find({$and:[ filter]} )
if(blog.length == 0){
return res.status(400).send({status: false,msg: "no blogs published"})
}
return res.status(201).send({status:true,data:blog})
}

// update



const updateBlog = async function (req, res) {    //localhost:3000/handleName/idNumber

    let blogId = req.params.blogId
      
    let data=req.body
   
    let x = await blogsModel.findById(blogId)
        console.log(x);
    try {
      if (x) {
        if (x.isDeleted === false) {

            if (data.isPublished===true){
                let a =await blogsModel.findOneAndUpdate({_id: blogId},{$set:{isPublished:true, publishedAt:Date.now()}})
            }
            
          let updatedBlog = await blogsModel.findOneAndUpdate({ _id:  blogId  }, {...data}, { new: true })

         return res.status(200).send({ msg: "blog updated successfully", updatedBlog })
  
        }
        else {
          return res.status(404).send({ msg: "blog not found" })
        }
      }
      else {
        return res.status(404).send({ msg: "blog id not found" })
      }
    }
    catch (err) {
      return res.status(500).send({ ERROR: err.message })
    }
  
  }

// delete by id 

let deleteBlogById = async function(req,res){

    try{
            let id =req.params.blogId
            console.log(id)
        if(id){
            let deletedBlog = await blogsModel.findOneAndUpdate({_id : id},{$set:{isDeleted:false}})
         console.log(deletedBlog)
         res.send(deletedBlog)
        }else res.status(400).send('BAD REQUEST')
    }catch(err){
        res.status(500).send({msg:ERROR, error:err.message})
    }
    }
//delete by query params
    
let deletedByQueryParams = async function(req,res){
    try{
      let data=req.query
   
       if(data){
           
        
       let deletedBlogsFinal = await blogsModel.updateMany({$in:data},{$set:{isDeleted:false}})
   
   
      res.status(200).send({status:true})
        } else { res.status(400).send({ERROR:"BAD REQUEST"})}
   
   }
    catch(err){res.status(500).send({ERROR:err.message})}
   }
    





module.exports.createAuthor = createAuthor
module.exports.createblogs = createblogs
module.exports.getBlog = getBlog
module.exports.updateBlog = updateBlog
module.exports.deleteBlogById=deleteBlogById
module.exports.deletedByQueryParams= deletedByQueryParams
