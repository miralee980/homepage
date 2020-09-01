const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../../models/user");

exports.register = (req, res) => {
	const { email, password } = req.body;

	User.findOneByUserEmail(email, (rows, err) => {
		if (err) {
			console.log(err);
		} else {
			if (rows) checkPassword(rows[0].password);
		}
	});
};

exports.login = (req, res) => {
	const { email, password } = req.body;
	const secret = req.app.get("jwt-secret");
	var authLevel = 100;
	var id = 0;

	const makeToken = (result) => {
		if (result) {
			const p = new Promise((resolve, reject) => {
				jwt.sign(
					{
						authLevel: authLevel,
						email: email
					},
					secret,
					{
						expiresIn: "7d",
						issuer: "quantec.co.kr",
						subject: "userInfo"
					},
					(err, token) => {
						if (err) {
							reject(err);
						} else {
							resolve(token);
						}
					}
				);
			});
			return p;
		} else throw new Error("비밀번호가 맞지 않습니다.");
	};

	const checkPassword = (rows) => {
		console.log(rows);
		if (rows.length) {
			authLevel = rows[0].auth_level;
			id = rows[0].id;
			return bcrypt.compare(password, rows[0].password.replace(/^\$2y/, "$2a"));
		} else throw new Error("없는 Email입니다.");
	};

	const respond = (token) => {
		console.log(token);
		res.json({
			status: "OK",
			message: "logged in successfully",
			data: { token: token, email: email, authLevel: authLevel, id: id }
		});
	};

	const onError = (error) => {
		res.json({
			status: "Fail",
			message: error.message
		});
	};
	User.findOneByUserEmail(email)
		.then(checkPassword)
		.then(makeToken)
		.then(respond)
		.catch(onError);
};
