const router = require("express").Router();
const { verifyToken } = require("../middlewares/authorization");
const auth = require("./auth");
const admin = require("./admin");

router.use("/auth", auth);
router.use("/admin", verifyToken);
router.use("/admin", admin);

module.exports = router;
