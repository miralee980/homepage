const mysql = require("mysql");
const config = require("../config");

var pool = mysql.createPool({
	connectionLimit: config.connectionLimit,
	host: config.host,
	user: config.user,
	password: config.password,
	port: config.port,
	database: config.database,
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
