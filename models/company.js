var conn = require("./database");

var Company = (function () {
	function loadCompanyInfo(callback) {
		console.log("loadCompanyInfo");
		conn.query("SELECT * FROM quantec.company_info;", null, callback);
	}
	function updateCompanyInfo(data, callback) {
		console.log("updateCompanyInfo");
		var sql =
			"UPDATE quantec.company_info \
			SET company_name=?, ceo_name=?, company_registration_number=?, \
			location=?, location_en=?, homepage_url=?, email=?, tel=?, fax=?, \
			other1=?, other2=?, other3=? \
			WHERE id=?;";
		conn.query(sql, data, callback);
	}

	return {
		loadCompanyInfo: loadCompanyInfo,
		updateCompanyInfo: updateCompanyInfo,
	};
})();

module.exports = Company;
