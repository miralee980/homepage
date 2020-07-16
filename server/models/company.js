var conn = require("./database");

var Company = (function () {
	function loadCompanyInfo() {
		// console.log("loadCompanyInfo");
		return conn.query("SELECT * FROM quantec.company_info;", null);
	}
	function updateCompanyInfo(data) {
		// console.log("updateCompanyInfo");
		var sql =
			"UPDATE quantec.company_info \
			SET company_name=?, ceo_name=?, company_registration_number=?, \
			location=?, location_en=?, homepage_url=?, email=?, tel=?, fax=?, \
			other1=?, other2=?, other3=?, `updated_at`= now() \
			WHERE id=?;";
		return conn.query(sql, data);
	}

	return {
		loadCompanyInfo: loadCompanyInfo,
		updateCompanyInfo: updateCompanyInfo,
	};
})();

module.exports = Company;
