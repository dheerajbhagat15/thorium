const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/secondApi", function (req, res) {
    res.send("My second ever api!")
})

router.get("/thirdApi", function (req, res) {
    res.send("My third ever api!")
})




    
    


module.exports = router;