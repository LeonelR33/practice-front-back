const { Router } = require("express");
const { Category } = require("../../../db");

const router = Router();

router.get("/", (req, res, next)=> {
    Category.findAll().then(category => res.status(200).json(category))
    .catch(err => res.status(400).send(err.message))
})

router.post("/create", (req, res, next) => {
    const { name } = req.body;

    Category.create({
        name: name,
    }).then( newCategory => res.status(200).send("category created"))
    .catch(err => res.status(400).send(err.message))
})

router.put("/edit", (req, res, next)=> {
    const { name, id } = req.body;

    Category.findByPk(id).then(category => {
        if(category) {
            category.name = name;
            category.save().then( () => res.status(200).send("category updated"))
            .catch(err => res.status(400).send(err.message))
        }
        else{
            return res.status(400).json({error: "category does not exist"})
        }
    }).catch(err => res.status(400).send(err.message))
})

router.delete("/delete", (req, res, next) => {
    const { id } = req.body;

    Category.destroy({
        where: {
            id: id
        }
    }).then(category => res.status(200).send("category deleted"))
    .catch(err => res.status(400).send(err.message))
})

module.exports = router;