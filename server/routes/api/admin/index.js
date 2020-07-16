const fs = require("fs");
const multer = require("multer");
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	}
});
var upload = multer({ storage: storage });

const router = require("express").Router();
const company = require("./company");
const dashboard = require("./dashboard");
const history = require("./history");
const news = require("./news");
const user = require("./user");
const sns = require("./sns");
const partner = require("./partner");
const recruit = require("./recruit");

router.use("/company", company);
router.use("/dashboard", dashboard);
router.use("/history", history);
router.use("/news", news);
router.use("/user", user);
router.use("/sns", sns);
router.use("/partner", partner);
router.use("/recruit", recruit);
router.post("/upload", upload.single("file"), function (req, res) {
	console.log("uploadUserProfile");

	console.log(req.file);
	return res.json({ status: "OK" });
});

router.delete("/deleteFile", function (req, res) {
	console.log("deleteFile");
	fileName = "uploads/" + req.body.fileName;

	console.log(fileName);
	fs.unlink(fileName, function (err) {
		if (err) {
			return res.json({ status: "Fail", message: err });
		} else {
			return res.json({ status: "OK" });
		}
	});
});

module.exports = router;
