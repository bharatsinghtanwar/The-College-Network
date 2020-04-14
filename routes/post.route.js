const express = require("express")
const router = express.Router()
const post_controller = require("../controllers/post.controller")

router.put("/like", post_controller.like)

router.put("/comment", post_controller.comment)

router.put("/share", post_controller.share)

router.put("/save", post_controller.save)

module.exports = router