const express = require("express")
const app = express()
const port = 3000
const routes = require("./routes")
const passport = require("./lib/passport")


app.set("view engine", "ejs")
app.use("/public", express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)




app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)

})