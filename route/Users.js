const express = require("express");
const users = express.Router();
const cors = require("cors");
var conn = require("../database");
// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

users.use(cors());

// process.env.SECRET_KEY = 'secret';

users.get("/loadUser", (req, res) => {
	console.log("loadUser");
	conn.query(
		"SELECT * FROM quantec.users Order by show_index asc;",
		null,
		(rows, err) => {
			if (err) {
				console.log(err);
			}
			console.log(rows);
			res.send(rows);
		}
	);
});

users.post("/addUser", (req, res) => {
	console.log("addUser");

	var userInfo = req.body.userInfo;
	console.log(userInfo);

	var name = userInfo.name;
	var show_index = userInfo.show_index;
	var job_position = userInfo.job_position;
	var job_dept = userInfo.job_dept;
	var job_description = userInfo.job_description;
	var motto = userInfo.motto;
	var auth_level = userInfo.auth_level;
	var email = userInfo.email;
	var profile_img = userInfo.profile_img;
	var password = userInfo.password;
	var remember_token = userInfo.remember_token;
});

users.post("/register", (req, res) => {
	// const userData = {
	//     name : req.body.name,
	//     job_position : req.body.job_position,
	//     job_dept : req.body.job_dept,
	//     job_description : req.body.job_description,
	//     motto : req.body.job_motto,
	//     auth_level : req.body.auth_level,
	//     profile_img : req.body.profile_img,
	//     password : req.body.password
	// }
	res.send({ message: "Register User" });
});

users.post("/login", (req, res) => {
	console.log("login");

	var userInfo = req.body.userInfo;
	console.log(userInfo);

	var password = userInfo.password;
	var email = userInfo.email;
	var remember = userInfo.remember;

	var sql = `SELECT password FROM users WHERE email='${email}';`;
	conn.query(sql, null, (result, err) => {
		if (err) {
			console.log(err);
		} else {
			console.log(result[0].password);
			// var data = {
			// 	status: "Fail",
			// 	message: "새로운 연혁 추가가 실패했습니다.",
			// };
			// if (result.insertId > 0) {
			// 	data = {
			// 		status: "OK",
			// 		message: "새로운 연혁이 추가되었습니다.",
			// 	};
			// }
			// res.send(data);
			// var test = "$2y$10$3NF4rnyQlsiBSyNkKZz85eGHL7kCoWfdBOQToGI2Rulq.9ik4AMcy";
			// var finalNodeGeneratedHash = result[0].password.replace("$2y$", "$2a$");
			//console.log(finalNodeGeneratedHash);
			if (bcrypt.compareSync(result[0].password, password)) {
				console.log("OK");
			} else {
				console.log("FALSE");
			}
		}
	});
	res.send({ message: "User Login" });
});

module.exports = users;
