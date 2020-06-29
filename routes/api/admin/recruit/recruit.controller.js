const Recruit = require("../../../../models/recruit");

exports.loadRecruit = (req, res) => {
	const respond = result => {
		console.log(result);
		if (result.length)
			res.send({
				status: "OK",
				message: "Recruit Data",
				data: result
			});
		else
			res.send({
				status: "Fail",
				message: "Recruit 데이터가 없습니다."
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message
		});
	};

	Recruit.loadRecruit().then(respond).catch(onError);
};

exports.addRecruit = (req, res) => {
	var recruitData = req.body.recruitData;
	var data = [
		recruitData.title,
		recruitData.part,
		recruitData.career,
		recruitData.work_type,
		recruitData.recruit_type,
		recruitData.link,
		recruitData.start_at,
		recruitData.end_at
	];
	const respond = result => {
		if (result.insertId > 0)
			res.send({
				status: "OK",
				message: "새로운 채용공고가 추가되었습니다."
			});
		else
			res.send({
				status: "Fail",
				message: "새로운 채용공고 추가가 실패했습니다."
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message
		});
	};

	Recruit.addRecruit(data).then(respond).catch(onError);
};

exports.updateRecruit = (req, res) => {
	var recruitData = req.body.recruitData;
	if (
		!recruitData.hasOwnProperty("id") ||
		recruitData.id < 1 ||
		recruitData.id === null
	) {
		console.log("RecruitData id is not a validate number.");
		res.status(403).json({
			status: "Fail",
			message: "RecruitData id is not a validate number."
		});
		return;
	}

	var data = [
		recruitData.title,
		recruitData.part,
		recruitData.career,
		recruitData.work_type,
		recruitData.recruit_type,
		recruitData.link,
		recruitData.start_at,
		recruitData.end_at,
		recruitData.id
	];

	const respond = result => {
		if (result.changedRows > 0)
			res.send({
				status: "OK",
				message: "채용공고가 수정되었습니다."
			});
		else
			res.send({
				status: "Fail",
				message: "채용공고 수정이 실패했습니다."
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message
		});
	};

	Recruit.updateRecruit(data).then(respond).catch(onError);
};

exports.delRecruit = (req, res) => {
	var id = req.body.id;

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
				message: "채용공고가 삭제되었습니다."
			});
		else
			res.send({
				status: "Fail",
				message: "채용공고 삭제가 실패했습니다."
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message
		});
	};

	Recruit.delRecruit(id).then(respond).catch(onError);
};
