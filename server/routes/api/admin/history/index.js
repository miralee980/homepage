const router = require("express").Router();
const controller = require("./history.controller");

router.get("/loadHistory", controller.loadHistory);
router.post("/addHistory", controller.addHistory);
router.post("/updateHistory", controller.updateHistory);
router.post("/delHistory", controller.delHistory);

module.exports = router;
