const router = require("express").Router();
const controller = require("./recruit.controller");

router.get("/loadRecruit", controller.loadRecruit);
router.post("/addRecruit", controller.addRecruit);
router.post("/updateRecruit", controller.updateRecruit);
router.post("/delRecruit", controller.delRecruit);

module.exports = router;
