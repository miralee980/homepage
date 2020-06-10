var conn = require("./database");

var Dashboard = (function () {
	function getMonthData(month) {
		// console.log("getMonthData");
		var sql = `SELECT COUNT(id) AS visitors, \
			DATE_FORMAT(income_date, '%Y-%m-%d') AS day\
			FROM visitors  \
			WHERE income_date LIKE '${month}%' \
			GROUP BY DATE_FORMAT(income_date, '%Y%m%d') 
			ORDER BY income_date asc;`;
		return conn.query(sql, null);
	}

	function getYearhData() {
		// console.log("getYearhData");
		var sql =
			"SELECT DATE_FORMAT(income_date, '%Y-%m') AS month, \
			COUNT(id) AS visitors \
			FROM visitors  \
			GROUP BY  DATE_FORMAT(income_date, '%Y%m') \
			ORDER BY income_date desc LIMIT 12;";
		return conn.query(sql, null);
	}

	function getDeviceData(month) {
		// console.log("getDeviceData");
		var sql = `SELECT COUNT(id) AS device_kind \
			FROM visitors  \
			WHERE  income_date LIKE '${month}%' \
			GROUP BY device;`;
		return conn.query(sql, null);
	}

	function getRawData(month) {
		// console.log("getRawData");
		var sql = `SELECT * \
		FROM visitors  \
		WHERE  income_date LIKE '${month}%';`;
		return conn.query(sql, null);
	}

	return {
		getMonthData: getMonthData,
		getYearhData: getYearhData,
		getDeviceData: getDeviceData,
		getRawData: getRawData,
	};
})();

module.exports = Dashboard;
