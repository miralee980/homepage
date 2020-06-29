const SNS = require("../../../../models/sns");

exports.loadSNS = (req, res) => {
	const respond = result => {
		console.log(result);
		if (result.length)
			res.send({
				status: "OK",
				message: "SNS Data",
				data: result
			});
		else
			res.send({
				status: "Fail",
				message: "SNS 데이터가 없습니다."
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message
		});
	};

	SNS.loadSNS().then(respond).catch(onError);
};

exports.addSNS = (req, res) => {
	var snsData = req.body.snsData;
	var brief = snsData.brief || "";
	var sns_type = snsData.sns_type || "";
	var data = [
		snsData.title,
		snsData.pub_at,
		snsData.image_url,
		snsData.link,
		brief,
		sns_type
	];
	const respond = result => {
		if (result.insertId > 0)
			res.send({
				status: "OK",
				message: "새로운 SNS가 추가되었습니다."
			});
		else
			res.send({
				status: "Fail",
				message: "새로운 SNS 추가가 실패했습니다."
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message
		});
	};

	SNS.addSNS(data).then(respond).catch(onError);
};

exports.updateSNS = (req, res) => {
	var snsData = req.body.snsData;
	var brief = snsData.brief || "";
	var sns_type = snsData.sns_type || "";

	if (!snsData.hasOwnProperty("id") || snsData.id < 1 || snsData.id === null) {
		console.log("SNSData id is not a validate number.");
		res.status(403).json({
			status: "Fail",
			message: "SNSData id is not a validate number."
		});
		return;
	}

	var data = [
		snsData.title,
		snsData.pub_at,
		snsData.image_url,
		snsData.link,
		brief,
		sns_type,
		snsData.id
	];

	const respond = result => {
		if (result.changedRows > 0)
			res.send({
				status: "OK",
				message: "SNS가 수정되었습니다."
			});
		else
			res.send({
				status: "Fail",
				message: "SNS 수정이 실패했습니다."
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message
		});
	};

	SNS.updateSNS(data).then(respond).catch(onError);
};

exports.delSNS = (req, res) => {
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
				message: "SNS가 삭제되었습니다."
			});
		else
			res.send({
				status: "Fail",
				message: "SNS 삭제가 실패했습니다."
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message
		});
	};

	SNS.delSNS(id).then(respond).catch(onError);
};
