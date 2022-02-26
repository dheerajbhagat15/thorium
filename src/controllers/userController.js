const UserModel= require("../models/userModel")

const createbook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getbooklist= async function (req, res) {
    let allbooks= await UserModel.find()
    res.send({msg: allbooks})
}

module.exports.createbook= createbook
module.exports.getbooklist= getbooklist