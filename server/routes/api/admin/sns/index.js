const router = require("express").Router();
const controller = require("./sns.controller");

router.get("/loadSNS", controller.loadSNS);
router.post("/addSNS", controller.addSNS);
router.post("/updateSNS", controller.updateSNS);
router.post("/delSNS", controller.delSNS);

module.exports = router;
