const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { Room } = require("../models")

function encryptPassword(pass){
    const hash = bcrypt.hashSync(pass, 10);
    return hash

}

function checkPassword(password,encryptPassword){
    let reportPassword = bcrypt.compareSync(password, encryptPassword);
    return reportPassword
}

function generateToken(user){
    
    let dataUser = {
        id: user.id,
        username: user.username,
        role: user.role
    }

    let secretOrPrivateKey = "Rahasia"
    let token = jwt.sign(dataUser,secretOrPrivateKey)
    return token
}

function format(user){
    const {username, id, role} = user
    let result = {
        id,
        username,
        role,
        accessToken: generateToken(user)
    }
    return result
}

class  RoomController{
    static async createRoom(req,res){
        const {name} = req.body

        try {
            let room = await Room.findOne({
                where: {
                    name
                }
            })
            if (room) {
                throw {
                    error: 400,
                    message: "Room Already Exist"
                }
            } else{
                const room = await Room.create({
                    name
                })
                let newroom = await Room.findOne({
                    where: {
                        name
                    }
                })
                res.redirect(`http://localhost:3000/room/fight/${newroom.id}`)
            }
        } catch (err) {
            res.status(500).json(err)
        }

        }

        static enterRoom (req,res){
            const {id} = req.params

             try {
                res.render("game")
             } catch (err) {
                res.status(500).json(err)
             }
            
        }

        static viewroom (req,res){
            res.render("enterRoom")
            
        }

        static async RPS (req, res) {
            try{
              const { id } = req.params
              const choice1 = "batu/gunting/kertas"
              const actionChoice = ['rock', 'paper', 'scissors']
              const choice2 = actionChoice[Math.floor(Math.random() * actionChoice.length)]
              await Room.update({
                choice1: choice1,
                choice2: choice2
              }, {
                where: {
                  id
                }
              })
            }
            
            catch (err) {
              res.status(400).json(err)
            }

        
    }
}


module.exports= RoomController