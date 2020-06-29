const router = require("express").Router();
const company = require("./company");
const dashboard = require("./dashboard");
const history = require("./history");
const news = require("./news");
const user = require("./user");
const sns = require("./sns");
const partner = require("./partner");
const recruit = require("./recruit");

router.use("/company", company);
router.use("/dashboard", dashboard);
router.use("/history", history);
router.use("/news", news);
router.use("/user", user);
router.use("/sns", sns);
router.use("/partner", partner);
router.use("/recruit", recruit);

module.exports = router;
