const express = require("express");
const router = require("express").Router();
const { authMiddleware } = require("../middlewares/authorization");
const auth = require("./auth");
const quantec = require("./quantec");
const admin = require("./admin");

router.use("/auth", auth);

router.use("/quantec", quantec);
router.use("/admin", authMiddleware);
router.use("/admin", admin);
router.use("/uploads", express.static("./uploads"));
module.exports = router;
