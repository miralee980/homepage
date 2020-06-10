const router = require("express").Router();
const controller = require("./dashboard.controller");

router.get("/monthData", controller.monthData);
router.get("/yearData", controller.yearData);
router.get("/deviceData", controller.deviceData);
router.get("/rawData", controller.rawData);

module.exports = router;
