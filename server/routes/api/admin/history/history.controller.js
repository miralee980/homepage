const History = require("../../../../models/history");

exports.loadHistory = (req, res) => {
	const respond = result => {
		console.log(result);
		if (result.length)
			res.send({
				status: "OK",
				message: "History Data",
				data: result,
			});
		else
			res.send({
				status: "Fail",
				message: "연혁 데이터가 없습니다.",
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message,
		});
	};

	History.loadHistory().then(respond).catch(onError);
};

exports.addHistory = (req, res) => {
	var historyData = req.body.historyData;
	var data = [historyData.type, historyData.did_at, historyData.desc];
	const respond = result => {
		if (result.insertId > 0)
			res.send({
				status: "OK",
				message: "새로운 연혁이 추가되었습니다.",
			});
		else
			res.send({
				status: "Fail",
				message: "새로운 연혁 추가가 실패했습니다.",
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message,
		});
	};

	History.addHistory(data).then(respond).catch(onError);
};

exports.updateHistory = (req, res) => {
	var historyData = req.body.historyData;

	if (
		!historyData.hasOwnProperty("id") ||
		historyData.id < 1 ||
		historyData.id === null
	) {
		console.log("HistoryData id is not a validate number.");
		res.status(403).json({
			status: "Fail",
			message: "HistoryData id is not a validate number.",
		});
		return;
	}

	var data = [
		historyData.type,
		historyData.did_at,
		historyData.desc,
		historyData.id,
	];

	const respond = result => {
		if (result.changedRows > 0)
			res.send({
				status: "OK",
				message: "연혁이 수정되었습니다.",
			});
		else
			res.send({
				status: "Fail",
				message: "연혁 수정이 실패했습니다.",
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message,
		});
	};

	History.updateHistory(data).then(respond).catch(onError);
};

exports.delHistory = (req, res) => {
	var id = req.body.id;

	if (id < 1 || id === null) {
		console.log("id is not a validate number.");
		res.status(403).json({
			status: "Fail",
			message: "Id is not a validate number.",
		});
		return;
	}
	const respond = result => {
		if (result.affectedRows > 0)
			res.send({
				status: "OK",
				message: "연혁이 삭제되었습니다.",
			});
		else
			res.send({
				status: "Fail",
				message: "연혁 삭제가 실패했습니다.",
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message,
		});
	};

	History.delHistory(id).then(respond).catch(onError);
};
