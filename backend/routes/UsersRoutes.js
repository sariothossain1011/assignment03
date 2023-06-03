const express = require("express");
const { register, login, find } = require("../controller/UsersController");
const Authentication = require("../middleware/Authentication");
const router = express.Router()



router.post("/register",register)

router.post("/login",login)
router.get("/find",Authentication,find)



module.exports = router
