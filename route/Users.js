const express = require("express");
const users = express.Router();
const cors = require("cors");
var conn = require("../database");
// const jwt = require("jsonwebtoken");
// const bcrypt = require('bcrypt');

users.use(cors());

// process.env.SECRET_KEY = 'secret';

users.get("/loadUser", (req, res) => {
	console.log("loadUser");
	conn.query(
		"SELECT * FROM quantec.users Order by show_index asc;",
		(err, rows, fields) => {
			if (err) {
				console.log(err);
			}
			console.log(rows);
			res.send(rows);
		}
	);
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
	res.send({ message: "User Login" });
});

module.exports = users;
