const { Router } = require("express");
const { User } = require("../../../db");

const router = Router();

router.put("/",(req, res, next) => {
    const {confirm} = req.query;

    User.findByPk(confirm)
    .then(user => {
        if(user){
            if(user.confirmed){
                res.status(400).send({error: "user is already confirmed"})
            }
            else{
                user.confirmed = true
                user.save().then( () => {
                return res.status(200).send("email confirmed")
                })
            }
            
        }
    })
})

module.exports = router;