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
	function _query(query, params) {
		return new Promise(function (resolve, reject) {
			pool.getConnection(function (err, connection) {
				if (err) {
					connection.release();
					return reject(err);
				}

				connection.query(query, params, function (err, rows) {
					connection.release();

					if (!err) {
						resolve(rows);
					} else {
						reject(err);
					}
				});

				connection.on("error", function (err) {
					connection.release();
					return reject(err);
				});
			});
		});
	}

	return {
		query: _query,
	};
})();

module.exports = database;
