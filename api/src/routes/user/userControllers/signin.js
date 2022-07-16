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
    }).then(response => {
    if(response){
        if(response.confirmed){
            if(response.comparePassword(password)){
                response.token = generateJwt(response.id);
                response.save().then(( ) => res.status(200).send("correct password"))
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