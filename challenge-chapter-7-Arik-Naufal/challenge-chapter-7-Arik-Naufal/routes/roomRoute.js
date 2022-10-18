const route = require("express").Router()
const restrict = require("../middlewares/restrict")
const RoomController = require("../controllers/RoomController")


route.get("/playroom", restrict, (req,res) => {
    res.status(200).json({message: "THIS IS PLAY ROOM"})
})
route.get("/create", RoomController.viewroom)
route.post("/create", RoomController.createRoom)
route.get("/fight/:id", RoomController.enterRoom)
route.post("/choice", RoomController.RPS)

module.exports = route