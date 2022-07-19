const { Router } = require("express");
const { Product, User } = require("../../../db")

const router = Router();

router.post("/add",( req, res, next )=>{
    const { productId } = req.body;
    const id = req.userId;

    User.findByPk(id).then(user => {
        if(user){
            Product.findByPk(productId).then(product => {
                if(product){
                   user.addProduct(productId).then( () => {
                    res.status(200).send("added to favorites")
                   }) 
                }
                else{res.status(400).json({error:"product does not exist"})}
            })
        }
        else{res.status(400).json({error:"user does not exist"})}
    }).catch(err => res.status(400).send(err.message) )
})

router.delete("/remove", ( req, res, next ) => {
    const { productId } = req.body;
    const id = req.userId;

    User.findByPk(id).then(user => {
        if(user){
            Product.findByPk(productId).then(product => {
                if(product){
                   user.removeProduct(productId).then(  () => {
                    res.status(200).send("removed from favorites")
                   }) 
                }
                else{res.status(400).json({error:"product does not exist"})}
            })
        }
        else{res.status(400).json({error:"user does not exist"})}
    }).catch(err => res.status(400).send(err.message) )

})

module.exports = router;