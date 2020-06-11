var conn = require("./database");

var History = (function () {
	function loadHistory() {
		console.log("loadHistory");
		var sql = "SELECT * FROM quantec.history Order by did_at desc;";
		return conn.query(sql, null);
	}
	function addHistory(data) {
		console.log("addHistory");
		var sql =
			"INSERT INTO quantec.history (`type`, `did_at`, `desc`) VALUES (?, ?, ?);";
		return conn.query(sql, data);
	}
	function updateHistory(data) {
		console.log("updateHistory");
		var sql =
			"UPDATE quantec.history \
			SET `type`=?, `did_at`=?, `desc`=? \
			WHERE id=?;";
		return conn.query(sql, data);
	}
	function delHistory(id) {
		console.log("delHistory");
		var sql = `DELETE FROM quantec.history WHERE id=${id}`;
		return conn.query(sql, null);
	}

	return {
		loadHistory: loadHistory,
		addHistory: addHistory,
		updateHistory: updateHistory,
		delHistory: delHistory,
	};
})();

module.exports = History;
