const express = require("express")
const router = express.Router()
const post_controller = require("../controllers/post.controller")

router.post("/like", post_controller.like)

router.post("/comment", post_controller.comment)

router.post("/share", post_controller.share)

router.post("/save", post_controller.save)

module.exports = router