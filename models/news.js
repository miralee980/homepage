var conn = require("./database");

var News = (function () {
	function loadNews() {
		console.log("loadNews");
		var sql = "SELECT * FROM quantec.news Order by pub_at desc;";
		return conn.query(sql, null);
	}
	function addNews(data) {
		console.log("addNews");
		var sql =
			"INSERT INTO quantec.news (`title`, `pub_at`, `image_url`, `link`, `brief`, `description`) VALUES (?,?,?,?,?,?);";
		return conn.query(sql, data);
	}
	function updateNews(data) {
		console.log("updateNews");
		var sql =
			"UPDATE quantec.news \
			SET `title`=?, `pub_at`=?, `image_url`=?, `link`=?, `brief`=?, `description`=? \
			WHERE id=?;";
		return conn.query(sql, data);
	}
	function delNews(id) {
		console.log("delNews");
		var sql = `DELETE FROM quantec.news WHERE id=${id}`;
		return conn.query(sql, null);
	}

	return {
		loadNews: loadNews,
		addNews: addNews,
		updateNews: updateNews,
		delNews: delNews,
	};
})();

module.exports = News;
