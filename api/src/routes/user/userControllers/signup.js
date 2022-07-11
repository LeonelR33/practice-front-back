const {Router} = require("express");
const { User } = require("../../../db");
const generateId = require("../../../helpers/generate-Id");

const router = Router();


router.post("/", (req, res, next)=>{
    const {
        name, 
        lastname, 
        phone, 
        email, 
        password,
    } = req.body;

    const generatedId = generateId();

    if(!name && !lastname && !email && !password) {
       return res.status(400).send("missing data");
    }

    User.findOne({
        where: { email: email },
    }).then(response => {
        if(response){
            return res.status(400).send("email is already in use")
        }
        else {
            User.create({
                id: generatedId,
                name: name, 
                lastname: lastname, 
                phone: phone, 
                email: email,
                password: password,
                confirmed: false,
            }).then(response => res.status(201).send(`user ${response.email} created`))
            .catch( err => res.status(400).json(err.message));
        }
        
    }).catch(err => res.status(400).json(err.message));
    
})

module.exports = router;