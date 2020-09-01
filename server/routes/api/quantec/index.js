const router = require("express").Router();
const companyController = require("../admin/company/company.controller");
const historyController = require("../admin/history/history.controller");
const newsController = require("../admin/news/news.controller");
const snsController = require("../admin/sns/sns.controller");
const partnerController = require("../admin/partner/partner.controller");
const recruitController = require("../admin/recruit/recruit.controller");
const userController = require("../admin/user/user.controller");

router.get("/companyInfo", companyController.companyInfo);
router.get("/news", newsController.loadNews);
router.get("/history", historyController.loadHistory);
router.get("/sns", snsController.loadSNS);
router.get("/partner", partnerController.loadPartner);
router.get("/recruit", recruitController.loadRecruit);
router.get("/crew", userController.loadUser);
module.exports = router;
