const express = require('express');
const router = express.Router();
const mainController= require("../controllers/mainController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createAuthor", mainController.createAuthor  )
router.post("/createBlogs", mainController.createblogs)
router.get("/getBlog", mainController.getBlog)
router.put("/updateBlog/:blogId", mainController.updateBlog)
router.delete("/deleteBlogById/:blogId", mainController.deleteBlogById)
router.delete("/deleteByQueryParams", mainController.deletedByQueryParams)




module.exports = router;