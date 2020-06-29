var conn = require("./database");

var Partner = (function () {
	function loadPartner() {
		console.log("loadPartner");
		var sql = "SELECT * FROM quantec.partners Order by show_index desc;";
		return conn.query(sql, null);
	}
	function addPartner(data) {
		console.log("addPartner");
		var sql =
			"INSERT INTO quantec.partners (`name`, `image_url`, `show_index`) VALUES (?,?,?);";
		return conn.query(sql, data);
	}
	function updatePartner(data) {
		console.log("updatePartner");
		var sql =
			"UPDATE quantec.partners \
			SET `name`=?, `image_url`=?, `show_index`=? \
			WHERE id=?;";
		return conn.query(sql, data);
	}
	function delPartner(id) {
		console.log("delPartner");
		var sql = `DELETE FROM quantec.partners WHERE id=${id}`;
		return conn.query(sql, null);
	}

	return {
		loadPartner: loadPartner,
		addPartner: addPartner,
		updatePartner: updatePartner,
		delPartner: delPartner
	};
})();

module.exports = Partner;
