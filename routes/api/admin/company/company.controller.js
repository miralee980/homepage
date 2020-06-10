const Company = require("../../../../models/company");

exports.companyInfo = (req, res) => {
	const respond = result => {
		if (result.length)
			res.send({
				status: "OK",
				message: "Company Infomation",
				data: result[0],
			});
		else
			res.send({
				status: "Fail",
				message: "회사정보가 없습니다.",
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message,
		});
	};

	Company.loadCompanyInfo().then(respond).catch(onError);
};

exports.updateCompanyInfo = (req, res) => {
	var companyInfo = req.body.companyInfo;
	if (
		!companyInfo.hasOwnProperty("id") ||
		companyInfo.id < 1 ||
		companyInfo.id === null
	) {
		console.log("CompanyInfo id is not a validate number. = ");
		res.status(403).json({
			status: "Fail",
			message: "CompanyInfo id is not a validate number.",
		});
		return;
	}

	var data = [
		companyInfo.company_name,
		companyInfo.ceo_name,
		companyInfo.company_registration_number,
		companyInfo.location,
		companyInfo.location_en,
		companyInfo.homepage_url,
		companyInfo.email,
		companyInfo.tel,
		companyInfo.fax,
		companyInfo.other1,
		companyInfo.other2,
		companyInfo.other3,
		companyInfo.id,
	];

	const respond = result => {
		if (result.changedRows > 0)
			res.send({
				status: "OK",
				message: "회사 정보가 수정되었습니다.",
			});
		else
			res.send({
				status: "Fail",
				message: "회사 정보 수정이 실패했습니다.",
			});
	};

	const onError = error => {
		res.status(403).json({
			status: "Fail",
			message: error.message,
		});
	};

	Company.updateCompanyInfo(data).then(respond).catch(onError);
};
