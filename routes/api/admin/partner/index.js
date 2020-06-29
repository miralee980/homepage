const router = require("express").Router();
const controller = require("./partner.controller");

router.get("/loadPartner", controller.loadPartner);
router.post("/addPartner", controller.addPartner);
router.post("/updatePartner", controller.updatePartner);
router.post("/delPartner", controller.delPartner);

module.exports = router;
