const route = require("express").Router()



route.get ("/", (req,res) =>{
    res.send("home library")
})




module.exports = route