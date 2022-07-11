require("dotenv").config();
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
try {
    let authorization = req.headers.authorization;    
    
    if(authorization && authorization.slice(0,6) === "Bearer"){
        const token = authorization.slice(7);
        const decoded = jwt.verify(token, process.env.JWT_SECRET_WORD);
       
        req.userId = decoded.id;
        next();    
    }
    else {
        return res.status(400).json({error: "without authorization"})
    }
} catch (error) {return res.status(400).json({error: "jwt error"})}
}

module.exports = auth;