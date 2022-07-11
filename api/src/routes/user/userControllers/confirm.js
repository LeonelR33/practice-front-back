const { Router } = require("express");
const { User } = require("../../../db");

const router = Router();

router.put("/",(req, res, next) => {
    const {confirm} = req.query;

    User.findByPk(confirm)
    .then(response => {
        if(response){
            if(response.confirmed){
                res.status(400).send({error: "user is already confirmed"})
            }
            else{
                response.confirmed = true
                response.save().then( () => {
                return res.status(200).send("email confirmed")
                })
            }
            
        }
    })
})

module.exports = router;