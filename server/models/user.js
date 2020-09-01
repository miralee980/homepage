var conn = require("./database");

var User = (function () {
	function loadUser() {
		console.log("loadUser");
		var sql =
			"SELECT id, show_index, name, job_position, job_dept,job_description, motto, auth_level, email, profile_img  FROM quantec.users Order by show_index asc;";
		return conn.query(sql, null);
	}

	function loadOneByUserId(id) {
		console.log("loadOneByUserId");
		var sql = `SELECT id, show_index, name, job_position, job_dept,job_description, auth_level, email, profile_img FROM quantec.users WHERE id='${id}';`;
		return conn.query(sql, null);
	}

	function findOneByUserEmail(email) {
		console.log("findOneByUserEmail");
		var sql = `SELECT password, auth_level, id FROM quantec.users WHERE email='${email}';`;
		return conn.query(sql, null);
	}

	function addUser(data) {
		console.log(data);
		console.log("addUser");
		var sql =
			"INSERT INTO quantec.users (`name`, `show_index`, `job_position`,`job_dept`, `job_description`, `motto`,\
            `auth_level`, `email`, `profile_img`, `password`, `created_at`, `updated_at`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now(), now());";
		return conn.query(sql, data);
	}
	function updateUser(data) {
		console.log("updateUser");
		var sql =
			"UPDATE quantec.users \
			SET `show_index`=?, `job_position`=?, `job_dept`=?, `job_description`=?, `motto`=?, `auth_level`=?, `profile_img`=?, `updated_at`= now()   \
			WHERE id=?;";
		return conn.query(sql, data);
	}
	function delUser(id) {
		console.log("delUser");
		var sql = `DELETE FROM quantec.users WHERE id=${id}`;
		return conn.query(sql, null);
	}

	function changePassword(data) {
		console.log("changePassword");
		var sql = `UPDATE quantec.users SET password = ? where id = ?;`;
		return conn.query(sql, data);
	}

	return {
		loadUser: loadUser,
		loadOneByUserId: loadOneByUserId,
		findOneByUserEmail: findOneByUserEmail,
		addUser: addUser,
		updateUser: updateUser,
		delUser: delUser,
		changePassword: changePassword
	};
})();

module.exports = User;
