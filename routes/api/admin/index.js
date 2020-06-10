const router = require("express").Router();
const company = require("./company");
const dashboard = require("./dashboard");
const history = require("./history");

router.use("/company", company);
router.use("/dashboard", dashboard);
router.use("/history", history);

module.exports = router;
