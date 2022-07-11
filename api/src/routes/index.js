const {Router} = require("express");
const user = require("./user/user");
const admin = require("./admin/admin");

const router = Router();

router.use("/user", user);
router.use("/admin", admin);

module.exports = router;