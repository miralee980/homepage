const express = require("express");
const company = express.Router();
const cors = require("cors");
var conn = require("../models/database");

company.use(cors());

company.get("/week", (req, res) => {
	console.log("week");
	console.log(req.query.month);
	conn.query(
		`SELECT COUNT(id) AS visitors, DATE_FORMAT(income_date, '%Y-%m-%d') AS day
		FROM visitors  where income_date LIKE '${req.query.month}%' GROUP BY DATE_FORMAT(income_date, '%Y%m%d') order BY income_date asc;`,
		null,
		(rows, err) => {
			if (err) {
				console.log(err);
			} else {
				console.log(rows);
				res.send(rows);
			}
		}
	);
});

company.get("/month", (req, res) => {
	console.log("month");

	conn.query(
		"SELECT DATE_FORMAT(income_date, '%Y-%m') AS month, COUNT(id) AS visitors FROM visitors  GROUP BY  DATE_FORMAT(income_date, '%Y%m') order BY income_date desc LIMIT 12;",
		null,
		(rows, err) => {
			if (err) {
				console.log(err);
			} else {
				console.log(rows);
				res.send(rows);
			}
		}
	);
});

company.get("/device", (req, res) => {
	console.log("device");
	console.log(req.query.month);

	conn.query(
		`SELECT COUNT(id) AS device_kind FROM visitors  WHERE  income_date LIKE '${req.query.month}%' GROUP BY device;`,
		null,
		(rows, err) => {
			if (err) {
				console.log(err);
			} else {
				var data = [
					{ name: "pc", value: rows[0].device_kind },
					{ name: "mobile", value: rows[1].device_kind },
				];
				console.log(data);
				res.send(data);
			}
		}
	);
});

company.get("/loadData", (req, res) => {
	console.log("loadData");
	console.log(req.query.month);

	conn.query(
		`SELECT * FROM visitors  WHERE  income_date LIKE '${req.query.month}%';`,
		null,
		(rows, err) => {
			if (err) {
				console.log(err);
			} else {
				console.log(rows);
				res.send(rows);
			}
		}
	);
});

module.exports = company;
