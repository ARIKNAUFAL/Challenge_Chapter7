const express = require("express")
const route = express.Router()
const mainRoute = require("./mainRoute")
const userRoute = require("./userRoute")
const roomRoute = require("./roomRoute")


route.use("/", mainRoute)
route.use("/user", userRoute)
route.use("/room", roomRoute)






module.exports = route