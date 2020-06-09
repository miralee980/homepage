const Company = require("../../../models/company");

exports.companyInfo = (req, res) => {
	console.log(req.decoded);
	Company.loadCompanyInfo((result, error) => {
		var data = {
			status: "Fail",
			message: "정보를 불러오는데 오류가 생겼습니다.",
			data: null,
		};
		console.log(result);
		if (result.length) {
			data = {
				status: "OK",
				message: "",
				data: result[0],
			};
		}
		res.send(data);
	});
};

exports.updateCompanyInfo = (req, res) => {
	console.log("updateCompanyInfo");
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
	var result = Company.updateCompanyInfo(data, (result, error) => {
		var data = {};
		if (result.changedRows > 0) {
			data = {
				status: "OK",
				message: "회사 정보가 수정되었습니다.",
			};
		} else {
			data = {
				status: "Fail",
				message: "회사 정보 수정이 실패했습니다.",
			};
		}
		res.send(data);
	});
};
