const mysql = require("mysql");

var pool = mysql.createPool({
	connectionLimit: 10,
	host: "uws7-020.cafe24.com",
	user: "quantec",
	password: "quant0330",
	port: "3306",
	database: "quantec",
	charset: "utf8",
	dateStrings: "date",
	typeCast: function (field, next) {
		if (field.type == "VAR_STRING") {
			return field.string();
		}
		return next();
	},
});

var database = (function () {
	function _query(query, params, callback) {
		pool.getConnection(function (err, connection) {
			if (err) {
				console.log(err);
				connection.release();
				callback(null, err);
				throw err;
			}

			connection.query(query, params, function (err, rows) {
				connection.release();

				if (!err) {
					callback(rows);
				} else {
					callback(null, err);
				}
			});

			connection.on("error", function (err) {
				connection.release();
				callback(null, err);
				throw err;
			});
		});
	}

	return {
		query: _query,
	};
})();

module.exports = database;
