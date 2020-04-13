const express = require("express")
const router = express.Router()
const user_controller = require("../controllers/user.controller")

router.post("/signup", user_controller.signup)

router.post("/signin", user_controller.signin)

router.post("/signout", auth, user_controller.signout)

router.post("/signoutall", auth, user_controller.signoutall)

router.post("/resetpassword", auth, user_controller.resetPass)

router.get("/", auth, user_controller.dashboard)

router.post("/update", auth, user_controller.update)

router.get("/feed", auth, user_controller.feed)

router.post("/createpost", auth, user_controller.createpost)

router.get("/myposts", auth, user_controller.myposts)

module.exports = router