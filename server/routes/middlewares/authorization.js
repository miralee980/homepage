const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
	// console.log("authMiddleware");
	const token = req.headers["x-access-token"] || req.query.token;

	if (!token) {
		return res.status(403).json({
			status: "Fail",
			message: "not logged in",
		});
	}

	const p = new Promise((resolve, reject) => {
		jwt.verify(token, req.app.get("jwt-secret"), (err, decoded) => {
			if (err) reject(err);
			resolve(decoded);
		});
	});

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message,
		});
	};

	p.then(decoded => {
		req.decoded = decoded;
		next();
	}).catch(onError);
};

exports.authMiddleware = authMiddleware;
