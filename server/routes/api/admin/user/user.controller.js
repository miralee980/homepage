const bcrypt = require("bcrypt");
const User = require("../../../../models/user");
const saltRounds = 10;

exports.loadUser = (req, res) => {
	const respond = result => {
		// console.log(result);
		if (result.length)
			res.send({
				status: "OK",
				message: "User Data",
				data: result
			});
		else
			res.send({
				status: "Fail",
				message: "사용자 리스트가 없습니다."
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message
		});
	};

	User.loadUser().then(respond).catch(onError);
};

exports.addUser = (req, res) => {
	var userInfo = req.body.userData.user;
	// console.log(req.body.userData);
	var name = userInfo.name;
	var show_index = userInfo.show_index;
	var job_position = userInfo.job_position || "";
	var job_dept = userInfo.job_dept || "";
	var job_description = userInfo.job_description || "";
	var motto = userInfo.motto || "";
	var auth_level = userInfo.auth_level;
	var email = userInfo.email;
	var profile_img = userInfo.profile_img;

	// console.log(userInfo.profile);

	// upload(userInfo.profile, res, function (err) {
	// 	if (err instanceof multer.MulterError) {
	// 		return onError(err);
	// 	} else if (err) {
	// 		return onError(err);
	// 	}
	// 	// console.log("원본파일명 : " + req.file.originalname);
	// 	// console.log("저장파일명 : " + req.file.filename);
	// 	// console.log("크기 : " + req.file.size);

	// 	return res.json({ status: "OK" });
	// });

	bcrypt.hash(userInfo.password, saltRounds).then(function (hash) {
		var data = [
			name,
			show_index,
			job_position,
			job_dept,
			job_description,
			motto,
			auth_level,
			email,
			profile_img,
			hash
		];
		User.addUser(data).then(respond).catch(onError);
	});

	const respond = result => {
		if (result.insertId > 0)
			res.send({
				status: "OK",
				message: "새로운 사용자가 추가되었습니다."
			});
		else
			res.send({
				status: "Fail",
				message: "새로운 사용자 추가가 실패했습니다."
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message
		});
	};
};

exports.updateUser = (req, res) => {
	var userInfo = req.body.userData.user;
	// console.log(req.body.userData);
	var show_index = userInfo.show_index;
	var job_position = userInfo.job_position || "";
	var job_dept = userInfo.job_dept || "";
	var job_description = userInfo.job_description || "";
	var motto = userInfo.motto || "";
	var auth_level = userInfo.auth_level;
	var profile_img = userInfo.profile_img;

	if (
		!userInfo.hasOwnProperty("id") ||
		userInfo.id < 1 ||
		userInfo.id === null
	) {
		console.log("UserData id is not a validate number.");
		res.status(403).json({
			status: "Fail",
			message: "UserData id is not a validate number."
		});
		return;
	}

	var id = userInfo.id;
	var data = [
		show_index,
		job_position,
		job_dept,
		job_description,
		motto,
		auth_level,
		profile_img,
		id
	];

	const respond = result => {
		if (result.changedRows > 0)
			res.send({
				status: "OK",
				message: "사용자 정보가 수정되었습니다."
			});
		else
			res.send({
				status: "Fail",
				message: "사용자 정보 수정이 실패했습니다."
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message
		});
	};
	if (userInfo.password) {
		console.log("change password");
		bcrypt.hash(userInfo.password, saltRounds).then(function (hash) {
			var passwordData = [hash, id];
			User.changePassword(passwordData);
		});
	}
	User.updateUser(data).then(respond).catch(onError);
};

exports.delUser = (req, res) => {
	var id = req.body.id;
	// console.log(req.body.id);
	if (id < 1 || id === null) {
		console.log("id is not a validate number.");
		res.status(403).json({
			status: "Fail",
			message: "Id is not a validate number."
		});
		return;
	}
	const respond = result => {
		if (result.affectedRows > 0)
			res.send({
				status: "OK",
				message: "사용자가 삭제되었습니다."
			});
		else
			res.send({
				status: "Fail",
				message: "사용자 삭제가 실패했습니다."
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message
		});
	};

	User.delUser(id).then(respond).catch(onError);
};
