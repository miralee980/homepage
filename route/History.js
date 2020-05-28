const express = require("express");
const history = express.Router();
const cors = require("cors");
var conn = require("../database");

history.use(cors());

history.get("/loadHistory", (req, res) => {
  console.log("loadHistory");
  conn.query(
    "SELECT * FROM quantec.history Order by did_at desc;",
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      }
      console.log(rows);
      res.send(rows);
    }
  );
});

history.post("/addHistory", (req, res) => {
  console.log("addHistory");

  var historyData = req.body.historyData;
  console.log(historyData);

  var type = historyData.type;
  var did_at = historyData.did_at;
  var desc = historyData.desc;

  var sql = "INSERT INTO quantec.history (type, did_at, desc) VALUES ?;";
  var data = [type, did_at, desc];

  conn.query(sql, data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      var data = {
        status: "OK",
        message: "",
      };
      res.send(data);
    }
  });
});

history.post("/updateHistory", (req, res) => {
  console.log("updateHistory");

  var historyData = req.body.historyData;
  console.log(historyData);

  if (
    !historyData.hasOwnProperty("id") ||
    historyData.id < 1 ||
    historyData.id === null
  ) {
    console.log("HistoryData id is not a validate number.");
    var data = {
      status: "Fail",
      message: "HistoryData id is not a validate number.",
    };
    res.send(data);
    return;
  }

  var id = historyData.id;
  var type = historyData.type;
  var did_at = historyData.did_at;
  var desc = historyData.desc;

  var sql =
    "UPDATE quantec.history \
      SET type=?, did_at=?, desc=? \
      WHERE id=?;";
  var data = [type, did_at, desc, id];

  conn.query(sql, data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      var data = {
        status: "Fail",
        message: "Fail update data",
      };
      if (result.changedRows > 0) {
        data = {
          status: "OK",
          message: "",
        };
      }
      res.send(data);
    }
  });
});

history.get("/delHistory", (req, res) => {
  console.log("delHistory");

  var id = req.body.id;

  if (id < 1 || id === null) {
    console.log("id is not a validate number.");
    return;
  }

  conn.query(`DELETE FROM quantec.history WHERE id=${id}`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    var data = {
      status: "OK",
      message: "",
    };
    res.send(data);
  });
});

module.exports = history;
