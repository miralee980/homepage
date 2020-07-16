var conn = require("./database");

var Recruit = (function () {
	function loadRecruit() {
		console.log("loadRecruit");
		var sql = "SELECT * FROM quantec.recruit;";
		return conn.query(sql, null);
	}
	function addRecruit(data) {
		console.log("addRecruit");
		console.log(data);
		if (data[6] === "" && data[7] === "") {
			var sql =
				"INSERT INTO quantec.recruit (`title`, `part`, `career`, `work_type`, `recruit_type`, `link`, `created_at`) VALUES (?,?,?,?,?,?,now());";
		} else {
			var sql =
				"INSERT INTO quantec.recruit (`title`, `part`, `career`, `work_type`, `recruit_type`, `link`, `start_at`, `end_at`, `created_at`) VALUES (?,?,?,?,?,?,?,?,now());";
		}
		return conn.query(sql, data);
	}
	function updateRecruit(data) {
		console.log("updateRecruit");
		console.log(data);
		if (data[6] === "" && data[7] === "") {
			data.splice(6, 2);
			var sql =
				"UPDATE quantec.recruit \
			SET `title`=?, `part`=?, `career`=?, `work_type`=?, `recruit_type`=?, `link`=?, `start_at`=null, `end_at`=null \
			WHERE id=?;";
		} else {
			var sql =
				"UPDATE quantec.recruit \
			SET `title`=?, `part`=?, `career`=?, `work_type`=?, `recruit_type`=?, `link`=?, `start_at`=?, `end_at`=? \
			WHERE id=?;";
		}
		return conn.query(sql, data);
	}
	function delRecruit(id) {
		console.log("delRecruit");
		var sql = `DELETE FROM quantec.recruit WHERE id=${id}`;
		return conn.query(sql, null);
	}

	return {
		loadRecruit: loadRecruit,
		addRecruit: addRecruit,
		updateRecruit: updateRecruit,
		delRecruit: delRecruit
	};
})();

module.exports = Recruit;
