var conn = require("./database");

var SNS = (function () {
	function loadSNS() {
		console.log("loadSNS");
		var sql = "SELECT * FROM quantec.sns Order by pub_at desc;";
		return conn.query(sql, null);
	}
	function addSNS(data) {
		console.log("addSNS");
		var sql =
			"INSERT INTO quantec.sns (`title`, `pub_at`, `image_url`, `link`, `brief`, `sns_type`) VALUES (?,?,?,?,?,?);";
		return conn.query(sql, data);
	}
	function updateSNS(data) {
		console.log("updateSNS");
		var sql =
			"UPDATE quantec.sns \
			SET `title`=?, `pub_at`=?, `image_url`=?, `link`=?, `brief`=?, `sns_type`=? \
			WHERE id=?;";
		return conn.query(sql, data);
	}
	function delSNS(id) {
		console.log("delSNS");
		var sql = `DELETE FROM quantec.sns WHERE id=${id}`;
		return conn.query(sql, null);
	}

	return {
		loadSNS: loadSNS,
		addSNS: addSNS,
		updateSNS: updateSNS,
		delSNS: delSNS
	};
})();

module.exports = SNS;
