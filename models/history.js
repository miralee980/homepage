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

// const express = require("express");
// const history = express.Router();
// const cors = require("cors");
// var conn = require("../models/database");

// history.use(cors());

// history.get("/loadHistory", (req, res) => {
// 	console.log("loadHistory");
// 	conn.query(
// 		"SELECT * FROM quantec.history Order by did_at desc;",
// 		null,
// 		(rows, err) => {
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				console.log(rows);
// 				res.send(rows);
// 			}
// 		}
// 	);
// });

// history.post("/addHistory", (req, res) => {
// 	console.log("addHistory");

// 	var historyData = req.body.historyData;
// 	console.log(historyData);

// 	var type = historyData.type;
// 	var did_at = historyData.did_at;
// 	var desc = historyData.desc;

// 	var sql =
// 		"INSERT INTO quantec.history (`type`, `did_at`, `desc`) VALUES (?, ?, ?);";
// 	var data = [type, did_at, desc];

// 	conn.query(sql, data, (result, err) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(result);
// 			var data = {
// 				status: "Fail",
// 				message: "새로운 연혁 추가가 실패했습니다.",
// 			};
// 			if (result.insertId > 0) {
// 				data = {
// 					status: "OK",
// 					message: "새로운 연혁이 추가되었습니다.",
// 				};
// 			}
// 			res.send(data);
// 		}
// 	});
// });

// history.post("/updateHistory", (req, res) => {
// 	console.log("updateHistory");

// 	var historyData = req.body.historyData;
// 	console.log(historyData);

// 	if (
// 		!historyData.hasOwnProperty("id") ||
// 		historyData.id < 1 ||
// 		historyData.id === null
// 	) {
// 		console.log("HistoryData id is not a validate number.");
// 		var data = {
// 			status: "Fail",
// 			message: "HistoryData id is not a validate number.",
// 		};
// 		res.send(data);
// 		return;
// 	}

// 	var id = historyData.id;
// 	var type = historyData.type;
// 	var did_at = historyData.did_at;
// 	var desc = historyData.desc;

// 	var sql =
// 		"UPDATE quantec.history \
//       SET `type`=?, `did_at`=?, `desc`=? \
//       WHERE id=?;";
// 	var data = [type, did_at, desc, id];

// 	conn.query(sql, data, (result, err) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(result);
// 			var data = {
// 				status: "Fail",
// 				message: "연혁 수정이 실패했습니다.",
// 			};
// 			if (result.changedRows > 0) {
// 				data = {
// 					status: "OK",
// 					message: "연혁이 수정되었습니다.",
// 				};
// 			}
// 			res.send(data);
// 		}
// 	});
// });

// history.post("/delHistory", (req, res) => {
// 	console.log("delHistory");
// 	var id = req.body.id;

// 	if (id < 1 || id === null) {
// 		console.log("id is not a validate number.");
// 		var data = {
// 			status: "Fail",
// 			message: "Id is not a validate number.",
// 		};
// 		res.send(data);
// 		return;
// 	}

// 	conn.query(
// 		`DELETE FROM quantec.history WHERE id=${id}`,
// 		null,
// 		(result, err) => {
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				console.log(result);
// 				var data = {
// 					status: "Fail",
// 					message: "연혁 삭제가 실패했습니다.",
// 				};
// 				if (result.affectedRows > 0) {
// 					data = {
// 						status: "OK",
// 						message: "연혁이 삭제되었습니다.",
// 					};
// 				}
// 				res.send(data);
// 			}
// 		}
// 	);
// });

// module.exports = history;
