const { registerUser, loginUser } = require("../controllers/userController")
const express = require("express")
const router = express.Router()

router.post("/", registerUser)
router.post("/login", loginUser)

module.exports = router
