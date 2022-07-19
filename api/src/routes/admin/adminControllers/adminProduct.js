const { Router } = require("express");
const { Product } = require("../../../db");
const { Category } = require("../../../db");

const router = Router();

router.get("/", (req, res, next)=> {
    Product.findAll(
        {include: Category}
    ).then(product => res.status(200).json(product))
    .catch(err => res.status(400).send(err.message))
})

router.post("/create", (req, res, next) => {
    const { name, catId } = req.body;

    Product.create({
        name: name,
    })
    .then(newProduct => newProduct.addCategory(catId))
    .then(newProduct => res.status(200).send("product created"))
    .catch(err => res.status(400).send(err.message))
})

router.put("/edit", (req, res, next)=> {
    const { name, id } = req.body;

    Product.findByPk(id).then(product => {
        if(product) {
            product.name = name;
            product.save().then( product => res.status(200).send("product updated"))
            .catch(err => res.status(400).send(err.message))
        }
        else{
            return res.status(400).json({error: "product does not exist"})
        }
    }).catch(err => res.status(400).send(err.message))
})

router.delete("/delete", (req, res, next) => {
    const { id } = req.body;

    Product.destroy({
        where: {
            id: id
        }
    }).then( product => res.status(200).send("product deleted"))
    .catch(err => res.status(400).send(err.message))
})

module.exports = router;