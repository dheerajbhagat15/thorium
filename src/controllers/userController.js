const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const createUser = async function (req, res) {
try {
  let data = req.body;
  console.log(data)
  if (Object.keys(data).length != 0) {
  let savedData = await userModel.create(data);
  res.status(201).send({ msg: savedData });
    }
    else res.status(400).send({ msg: "BAD REQUEST" })
} 
catch (err) { 
  console.log("This is the error:", err.message)
  res.status(500).send({ Error: err.message }) }
};



const loginUser = async function (req, res) {
try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });

  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not correct",
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
}

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, data: token });
};



const getUserData = async function (req, res) {
try{
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);

  if (!userDetails){
    return res.status(400).send({ status: false, msg: "No such user exists" });
  }
  res.status(200).send({ status: true, data: userDetails });
} catch (error) {
  res.status(500).send({ error: error.message });
}
};



const updateUser = async function (req, res) {

try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.status(400).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set : userData } ,{new : true});
  res.status(200).send({ status: "updatedUser", data: updatedUser });
} catch (error) {
  res.status(500).send({ error: error.message });
}
};


const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let ChangeUserProperty = await userModel.findOneAndUpdate( { _id : userId },{$set : {isDeleted : true }})
  let deleteUser = await userModel.findByIdAndDelete(userId)
  res.status(200).send({msg :"user deleted Succesfully" ,deleteUser })

}
const createPost = async function (req, res){
try{
  let userId = req.params.userId
  let user = await userModel.findById(userId)
  let message = req.body
  let updatedPosts = user.posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
  return res.status(200).send({status: true, data: updatedUser})
} catch (error) {
  res.status(500).send({ error: error.message });
}

}
 


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.createPost = createPost;