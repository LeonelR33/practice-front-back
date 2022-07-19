const { Router } = require("express")
const { User } = require("../../../db");

const router = Router();

router.put("/", (req, res, next) => {
    const {id, banned} = req.body;

    User.findByPk(id).then(user =>{ 
        if(user){
            user.banned = banned;
            user.save().then(user => {
                return res.status(200).send("user banned status updated")
            }).catch(err => {return res.status(400).send(err.message)})
        }
        else {
            return res.status(400).json({error: "user does not exist"})
        }
    }
    ).catch(err => {return res.status(400).send(err.message)})
})

module.exports = router;