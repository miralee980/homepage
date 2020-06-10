const router = require("express").Router();
const { authMiddleware } = require("../middlewares/authorization");
const auth = require("./auth");
const admin = require("./admin");

router.use("/auth", auth);
router.use("/admin", authMiddleware);
router.use("/admin", admin);

module.exports = router;
