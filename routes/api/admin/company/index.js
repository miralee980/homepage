const router = require("express").Router();
const controller = require("./company.controller");

router.get("/companyInfo", controller.companyInfo);
router.post("/updateCompanyInfo", controller.updateCompanyInfo);

module.exports = router;
