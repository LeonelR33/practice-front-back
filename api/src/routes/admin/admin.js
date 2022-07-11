const { Router } = require("express");
const getAllUsers = require("./adminControllers/getAllUsers");
const setAdmin = require("./adminControllers/setAdmin");
const banUser = require("../admin/adminControllers/banUser")
const auth = require("../../middlewares/auth");
const authAdmin = require("../../middlewares/authAdmin");

const router = Router();

router.use("/getallusers", [auth,authAdmin], getAllUsers);
router.use("/setadmin", [auth,authAdmin], setAdmin);
router.use("/banuser", [auth,authAdmin], banUser);

module.exports = router;