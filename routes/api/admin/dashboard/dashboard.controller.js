const Dashboard = require("../../../../models/dashboard");

exports.monthData = (req, res) => {
	const respond = result => {
		if (result.length)
			res.send({
				status: "OK",
				message: "Month Data",
				data: result,
			});
		else
			res.send({
				status: "Fail",
				message: "데이터가 없습니다.",
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message,
		});
	};

	Dashboard.getMonthData(req.query.month).then(respond).catch(onError);
};

exports.yearData = (req, res) => {
	const respond = result => {
		if (result.length)
			res.send({
				status: "OK",
				message: "Year Data",
				data: result,
			});
		else
			res.send({
				status: "Fail",
				message: "데이터가 없습니다.",
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message,
		});
	};

	Dashboard.getYearhData().then(respond).catch(onError);
};

exports.deviceData = (req, res) => {
	const respond = result => {
		if (result.length) {
			var data = [
				{ name: "pc", value: result[0].device_kind },
				{ name: "mobile", value: result[1].device_kind },
			];
			res.send({
				status: "OK",
				message: "Kind of Device",
				data: data,
			});
		} else
			res.send({
				status: "Fail",
				message: "데이터가 없습니다.",
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message,
		});
	};

	Dashboard.getDeviceData(req.query.month).then(respond).catch(onError);
};

exports.rawData = (req, res) => {
	const respond = result => {
		if (result.length)
			res.send({
				status: "OK",
				message: "Raw Data",
				data: result,
			});
		else
			res.send({
				status: "Fail",
				message: "데이터가 없습니다.",
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message,
		});
	};

	Dashboard.getRawData(req.query.month).then(respond).catch(onError);
};
