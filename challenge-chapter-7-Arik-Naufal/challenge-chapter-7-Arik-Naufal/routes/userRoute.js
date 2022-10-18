const route = require("express").Router()
const UserController = require("../controllers/UserController")


route.get("/register", UserController.viewregister)
route.get("/login", UserController.viewlogin)
route.post("/registerhandle", UserController.register)
route.post("/loginhandle", UserController.login)








module.exports = route