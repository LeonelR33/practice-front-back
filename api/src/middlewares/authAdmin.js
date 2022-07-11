const { User } = require("../db");

const authAdmin = async (req, res, next) => {
    try{
        const id = req.userId;

       const admin = await User.findByPk(id);

       if(admin.userRol === "Admin"){
        next();
       }
       else { return res.status(400).json({error: "invalid rol"})}
    }
    catch(error){
        return res.status(400).send(error.message)
    }
}

module.exports = authAdmin;