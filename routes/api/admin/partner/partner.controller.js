const Partners = require("../../../../models/partner");

exports.loadPartner = (req, res) => {
	const respond = result => {
		console.log(result);
		if (result.length)
			res.send({
				status: "OK",
				message: "Partners Data",
				data: result
			});
		else
			res.send({
				status: "Fail",
				message: "파트너 데이터가 없습니다."
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message
		});
	};

	Partners.loadPartner().then(respond).catch(onError);
};

exports.addPartner = (req, res) => {
	var partnerData = req.body.partnerData;
	var data = [partnerData.name, partnerData.image_url, partnerData.show_index];
	const respond = result => {
		if (result.insertId > 0)
			res.send({
				status: "OK",
				message: "새로운 파트너가 추가되었습니다."
			});
		else
			res.send({
				status: "Fail",
				message: "새로운 파트너 추가가 실패했습니다."
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message
		});
	};

	Partners.addPartner(data).then(respond).catch(onError);
};

exports.updatePartner = (req, res) => {
	var partnerData = req.body.partnerData;

	if (
		!partnerData.hasOwnProperty("id") ||
		partnerData.id < 1 ||
		partnerData.id === null
	) {
		console.log("PartnersData id is not a validate number.");
		res.status(403).json({
			status: "Fail",
			message: "PartnersData id is not a validate number."
		});
		return;
	}

	var data = [
		partnerData.name,
		partnerData.image_url,
		partnerData.show_index,
		partnerData.id
	];

	const respond = result => {
		if (result.changedRows > 0)
			res.send({
				status: "OK",
				message: "파트너가 수정되었습니다."
			});
		else
			res.send({
				status: "Fail",
				message: "파트너 수정이 실패했습니다."
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message
		});
	};

	Partners.updatePartner(data).then(respond).catch(onError);
};

exports.delPartner = (req, res) => {
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
				message: "파트너가 삭제되었습니다."
			});
		else
			res.send({
				status: "Fail",
				message: "파트너 삭제가 실패했습니다."
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message
		});
	};

	Partners.delPartner(id).then(respond).catch(onError);
};
