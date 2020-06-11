const router = require("express").Router();
const company = require("./company");
const dashboard = require("./dashboard");
const history = require("./history");
const news = require("./news");
const user = require("./user");

router.use("/company", company);
router.use("/dashboard", dashboard);
router.use("/history", history);
router.use("/news", news);
router.use("/user", user);

module.exports = router;
