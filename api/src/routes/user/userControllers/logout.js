const { Router } = require("express");
const { User } = require("../../../db");

const router = Router();

router.get("/", ( req, res, next) => {
    const id = req.userId;

    User.findByPk(id).then( response => {
        if(response && response.token){
            response.token = "";
            response.save().then( () => {
                res.status(200).send("correct logout")
            }
          )
        }
        else {
            res.status(400).json({error: "session dont exist" })
        }
    }).catch(err => res.status(400).send(err.message))
})

module.exports = router;