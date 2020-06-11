const router = require("express").Router();
const controller = require("./user.controller");

router.get("/loadUser", controller.loadUser);
router.post("/addUser", controller.addUser);
router.post("/updateUser", controller.updateUser);
router.post("/delUser", controller.delUser);

module.exports = router;
