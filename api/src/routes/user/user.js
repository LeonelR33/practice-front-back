const {Router} = require("express");
const signup = require("./userControllers/signup");
const signin = require("./userControllers/signin");
const confirm = require("./userControllers/confirm");
const logout = require("./userControllers/logout");
const userfavorites = require("./userControllers/userFavortites")

const auth = require("../../middlewares/auth")

const router = Router();

router.use("/signup", signup);
router.use("/signin", signin);
router.use("/confirm", confirm);
router.use("/logout", auth , logout);
router.use("/favorites", auth, userfavorites);

module.exports = router;