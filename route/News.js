const express = require("express");
const news = express.Router();
const cors = require("cors");
var conn = require("../database");

news.use(cors());

news.get("/loadNews", (req, res) => {
  console.log("loadNews");
  conn.query(
    "SELECT * FROM quantec.news Order by pub_at desc;",
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      }
      console.log(rows);
      res.send(rows);
    }
  );
});

news.post("/addNews", (req, res) => {
  console.log("addHistory");

  var newsData = req.body.newsData;
  console.log(newsData);

  var title = newsData.title;
  var pub_at = newsData.pub_at;
  var image_url = newsData.image_url;
  var link = newsData.link;
  var brief = newsData.brief || "";
  var description = newsData.description || "";

  var sql =
    "INSERT INTO quantec.news (title, pub_at, image_url, link, brief, description) VALUES ?;";
  var data = [title, pub_at, image_url, link, brief, description];

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

news.post("/updateNews", (req, res) => {
  console.log("updateNews");

  var newsData = req.body.newsData;
  console.log(newsData);

  if (
    !newsData.hasOwnProperty("id") ||
    newsData.id < 1 ||
    newsData.id === null
  ) {
    console.log("NewsData id is not a validate number.");
    var data = {
      status: "Fail",
      message: "NewsData id is not a validate number.",
    };
    res.send(data);
    return;
  }

  var title = newsData.title;
  var pub_at = newsData.pub_at;
  var image_url = newsData.image_url;
  var link = newsData.link;
  var brief = newsData.brief || "";
  var description = newsData.description || "";

  var sql =
    "UPDATE quantec.news \
      SET title=?, pub_at=?, image_url=?, link=?, brief=?, description=? \
      WHERE id=?;";
  var data = [title, pub_at, image_url, link, brief, description, id];

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

news.get("/delNews", (req, res) => {
  console.log("delNews");

  var id = req.body.id;

  if (id < 1 || id === null) {
    console.log("id is not a validate number ");
    return;
  }

  conn.query(`DELETE FROM quantec.news WHERE id=${id}`, (err, result) => {
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

module.exports = news;
