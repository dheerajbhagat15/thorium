const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")



router.post("/createbook", UserController.createbook  )

router.get("/getbooklist", UserController.getbooklist)

module.exports = router;