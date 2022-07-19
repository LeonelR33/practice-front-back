const { Router } = require("express");
const { User } = require("../../../db");

const router = Router();

router.get("/", ( req, res, next) => {
    const id = req.userId;

    User.findByPk(id).then( user => {
        if(user && user.token){
            user.token = "";
            user.save().then( () => {
                res.status(200).send("correct logout")
            }
          )
        }
        else {
            res.status(400).json({error: "session does not exist" })
        }
    }).catch(err => res.status(400).send(err.message))
})

module.exports = router;