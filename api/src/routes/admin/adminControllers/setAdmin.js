const { Router } = require("express");
const { User } = require("../../../db");

const router = Router();

router.put("/", (req, res, next) => {
    const {id, role} = req.query;

    User.findByPk(id).then( response => {
        if(response){
            response.userRol = role;
            response.save().then( response =>{
                return res.status(200).send("updated role")
            }).catch(err => {return res.status(400).send(err.message)})
        }
        else {
            return res.status(400).json({error: "user does not exist"})
        }
    }
    ).catch(err => { return res.status(400).send(err.message)})

})

module.exports = router;