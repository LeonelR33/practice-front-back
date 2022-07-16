const { Router } = require("express");
const getAllUsers = require("./adminControllers/getAllUsers");
const setAdmin = require("./adminControllers/setAdmin");
const banUser = require("../admin/adminControllers/banUser");
const adminProduct = require("../admin/adminControllers/adminProduct");
const adminCategory = require("../admin/adminControllers/adminCategory");
const auth = require("../../middlewares/auth");
const authAdmin = require("../../middlewares/authAdmin");

const router = Router();

router.use("/getallusers", [auth,authAdmin], getAllUsers);
router.use("/setadmin", [auth,authAdmin], setAdmin);
router.use("/banuser", [auth,authAdmin], banUser);
router.use("/product", [auth,authAdmin], adminProduct);
router.use("/category", [auth,authAdmin], adminCategory);

module.exports = router;