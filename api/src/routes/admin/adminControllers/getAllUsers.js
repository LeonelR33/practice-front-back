const { Router } = require("express");
const { User } = require("../../../db");

const router = Router();

router.get("/",(req, res, next)=>{
    User.findAll().then(response => {
        res.status(200).json(response)
    }).catch(err => res.status(400).send(err.message))
})

module.exports = router;