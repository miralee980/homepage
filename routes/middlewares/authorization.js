const jwt = require("jsonwebtoken");
const config = require("../../config");
const YOUR_SECRET_KEY = config.secret;

const verifyToken = (req, res, next) => {
	console.log("verifyToken");
	// try {
	// 	const clientToken = req.cookies.user;
	// 	const decoded = jwt.verify(clientToken, YOUR_SECRET_KEY);

	// 	if (decoded) {
	// 		res.locals.email = decoded.email;
	// 		next();
	// 	} else {
	// 		res.status(401).json({ error: "unauthorized" });
	// 	}
	// } catch (err) {
	// 	res.status(401).json({ error: "token expired" });
	// }

	const token = req.headers["x-access-token"] || req.query.token;

	if (!token) {
		return res.status(403).json({
			status: "Fail",
			message: "not logged in",
		});
	}

	const p = new Promise((resolve, reject) => {
		jwt.verify(token, YOUR_SECRET_KEY, (err, decoded) => {
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

exports.verifyToken = verifyToken;
