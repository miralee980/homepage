const router = require("express").Router();
const controller = require("./news.controller");

router.get("/loadNews", controller.loadNews);
router.post("/addNews", controller.addNews);
router.post("/updateNews", controller.updateNews);
router.post("/delNews", controller.delNews);

module.exports = router;
