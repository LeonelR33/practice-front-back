const jwt = require("jsonwebtoken");

const generateJwt = (id) => {
    return jwt.sign(
        { id: id }, 
        process.env.JWT_SECRET_WORD, 
        { expiresIn: "7d" },
        )
}

module.exports = generateJwt;