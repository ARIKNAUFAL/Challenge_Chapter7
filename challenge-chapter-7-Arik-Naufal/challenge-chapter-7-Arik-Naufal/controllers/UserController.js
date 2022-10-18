const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { User } = require("../models")

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

class UserController{
    static register(req,res){
        const { username, password, role} = req.body

        if (role === "PlayerUser" || role === "SuperAdmin") {
            User.findOne({ where:{
                username
            }})
               .then((result) => {
                   console.log(result, "===> ini result findone");
                   
                   if(!result) {
                       let passwordEncrypt = encryptPassword(password)

                    let inputUser = {
                        username,
                        password: passwordEncrypt,
                        role
                    }
                    return User.create(inputUser)
                   }else {
                       throw{
                           error: 400,
                           message: "username has already"
                       }
                   }
               })
               .then(result =>{
                   res.redirect("/user/login")
               })
               .catch((err) =>{
                    console.log(err, "==> INI ERROR Register");
                    res.status(500).json(err)
               });

               }else{
                   res.status(400).json({message: "Role must be input PlayerUser and Superadmin"})
               }

        }

        static async login (req,res){
            try {
                const {username,password,role} = req.body
                let user = await User.findOne({where: {
                    username
                }})

                if (user) {
                    console.log(user, "==> Username ada");

                    const isPassword = checkPassword(password,user.password)

                    if (isPassword) {
                        let result = format(user)
                        res.status(200).json(result)
                    } else {
                        throw{
                            error: 400,
                           message: "username and password wrong"

                        }
                        
                    }
                }else {
                    throw{
                        error: 402,
                        message: "username and password wrong"
                    }
                }

                
            } catch (error) {
                res.status(500).json(error)
            }
        }

        static viewregister (req,res){
            res.render("register")
        }

        static viewlogin (req,res){
            res.render("login")
        }

    



}


module.exports= UserController