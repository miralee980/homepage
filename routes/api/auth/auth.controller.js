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
	const { email, password } = req.body.userInfo;
	const secret = req.app.get("jwt-secret");

	const makeToken = () => {
		jwt.sign(
			{
				email: email,
			},
			secret,
			{
				expiresIn: "7d",
				issuer: "quantec.co.kr",
				subject: "userInfo",
			},
			(err, token) => {
				if (err) {
					res.status(403).json({
						status: "Fail",
						message: err,
					});
				} else {
					res.json({
						status: "OK",
						message: "logged in successfully",
						data: token,
					});
				}
			}
		);
	};

	const checkPassword = dbPassword => {
		return bcrypt
			.compare(password, dbPassword.replace(/^\$2y/, "$2a"))
			.then(result => {
				console.log(result);
				if (result) {
					makeToken();
				} else {
					res.json({
						status: "Fail",
						message: "비밀번호가 맞지 않습니다.",
					});
				}
			})
			.catch(err => console.log(err));
	};

	User.findOneByUserEmail(email, (rows, err) => {
		if (err) {
			console.log(err);
		} else {
			if (rows.length > 0) checkPassword(rows[0].password);
			else {
				res.json({
					status: "Fail",
					message: "없는 Email입니다.",
				});
			}
		}
	});
};
