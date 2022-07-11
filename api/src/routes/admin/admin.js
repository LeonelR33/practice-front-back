const { Router } = require("express");
const getAllUsers = require("./adminControllers/getAllUsers");
const auth = require("../../middlewares/auth");
const authAdmin = require("../../middlewares/authAdmin");

const router = Router();

router.use("/getallusers",[auth,authAdmin], getAllUsers);

module.exports = router;