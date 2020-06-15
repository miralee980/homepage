const router = require("express").Router();
const companyController = require("../admin/company/company.controller");
const historyController = require("../admin/history/history.controller");
const newsController = require("../admin/news/news.controller");

router.get("/companyInfo", companyController.companyInfo);
router.get("/news", newsController.loadNews);
router.get("/history", historyController.loadHistory);

module.exports = router;
