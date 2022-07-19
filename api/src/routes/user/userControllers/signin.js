const { Router } = require("express");
const { User } = require("../../../db");
const generateJwt = require("../../../helpers/generate-Jwt");

const router = Router();

router.post("/", (req, res, next)=>{
    const { email, password } = req.body;

    

    User.findOne({
        where: {
            email: email,
        }
    }).then(user => {
    if(user){
        if(user.confirmed){
            if(user.comparePassword(password)){
                user.token = generateJwt(user.id);
                user.save().then(( ) => res.status(200).json({msg:"correct password", name: user.name ,token: user.token}))
            }
            else{
                res.status(400).json({error: "incorrect password"})
            }
        }
        else{
            res.status(400).json({error: "please confirm your email"})
        }
    } 
    else{
        res.status(400).json({error: "email does not exist"})
    }
}).catch(err => res.status(400).send(err.message))
})

module.exports = router;