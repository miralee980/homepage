var conn = require("./database");

var User = (function () {
	function loadUser() {
		console.log("loadUser");
		conn.query(
			"SELECT * FROM quantec.users Order by show_index asc;",
			null,
			(rows, err) => {
				if (err) {
					console.log(err);
				} else {
					return rows;
				}
			}
		);
	}
	function findOneByUserEmail(email, callback) {
		console.log("findOneByUserEmail");
		conn.query(
			`SELECT password FROM users WHERE email='${email}';`,
			null,
			callback
			// (rows, err) => {
			// 	if (err) {
			// 		console.log(err);
			// 	} else {
			// 		console.log(rows);
			// 		return rows[0];
			// 	}
			// }
		);
	}
	function addUser(params) {
		console.log("addUser");
		conn.query(
			"INSERT INTO quantec.history (`name`, `show_index`, `job_position`,`job_dept`, `job_description`, `motto`,\
            `auth_level`, `email`, `profile_img`, `password`, `remember_token`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
			params,
			(rows, err) => {
				if (err) {
					console.log(err);
				} else {
					if (rows.insertId > 0) return rows;
					else return null;
				}
			}
		);
	}
	return {
		loadUser: loadUser,
		findOneByUserEmail: findOneByUserEmail,
		addUser: addUser,
	};
})();

module.exports = User;
