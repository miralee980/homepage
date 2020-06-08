const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../../models/user");

exports.register = (req, res) => {
	const { email, password } = req.body;
	// let newUser = null;

	// const create = (user) => {
	//     if(user) {
	//         throw new Error('User exist');
	//     } else {
	//         return user.create(email, password);
	//     }
	// }

	// const count = (user) => {
	//     newUser = user;
	//     return user.count({}).exec();
	// }

	// const assign = (count) => {
	//     if(count === 1) {
	//         reurn newUser.assignAdmin();
	//     } else {
	//         return Promise.resolve(false);
	//     }
	// }

	// const respond = (isAdmin) => {
	//     res.json({
	//         message:'registered successfully',
	//         admin: isAdmin?true:false
	//     })
	// }

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

	const checkPassword = dbPassword => {
		return bcrypt
			.compare(password, dbPassword.replace(/^\$2y/, "$2a"))
			.then(result => {
				console.log(result);
				// if (result) {
				// 	data = {
				// 		status: "OK",
				// 		message: "로그인 성공",
				// 	};
				// 	res.send(data);
				// } else {
				// 	var data = {
				// 		status: "Fail",
				// 		message: "패쓰워드가 다릅니다.",
				// 	};
				// 	res.send(data);
				// }
				const p = new Promise((resolve, reject) => {
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
							if (err) reject(err);
							resolve(token);
						}
					);
				});
				return p;
			})
			.catch(err => console.log(err));
	};
	const respond = token => {
		console.log(token);
		res.json({
			message: "logged in successfully",
			token,
		});
	};

	const onError = error => {
		res.status(403).json({
			message: error.message,
		});
	};

	User.findOneByUserEmail(email, (rows, err) => {
		if (err) {
			console.log(err);
		} else {
			console.log(rows);
			if (rows.length > 0)
				checkPassword(rows[0].password).then(respond).catch(onError);
			else {
				var data = {
					status: "Fail",
					message: "없는 Email입니다.",
				};
				res.send(data);
			}
		}
	});
	// User.findOneByUserEmail(email)
	// 	.then(checkPassword)
	// 	.then(respond)
	// 	.catch(onError);
};
