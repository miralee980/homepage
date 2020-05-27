const express = require("express");
const company = express.Router();
const cors = require("cors");
var conn = require("../database");

company.use(cors());

company.get("/companyinfo", (req, res) => {
  console.log("updateCompanyInfo");
  conn.query("SELECT * FROM quantec.company_info", (err, rows, fields) => {
    if (err) {
      console.log(err);
    }
    console.log(rows);
    res.send(rows);
  });
});

company.post("/updateCompanyInfo", (req, res) => {
  console.log("updateCompanyInfo");

  var companyInfo = req.body.companyInfo;
  console.log(companyInfo);

  if (companyInfo.id < 1 || companyInfo.id === null) {
    console.log("CompanyInfo id is not a validate id. = " + companyInfo.id);
    return;
  }
  var id = companyInfo.id;
  var company_name = companyInfo.company_name;
  var ceo_name = companyInfo.ceo_name;
  var company_registration_number = companyInfo.company_registration_number;
  var location = companyInfo.location;
  var location_en = companyInfo.location_en;
  var homepage_url = companyInfo.homepage_url;
  var email = companyInfo.email;
  var tel = companyInfo.tel;
  var fax = companyInfo.fax;
  var other1 = companyInfo.other1;
  var other2 = companyInfo.other2;
  var other3 = companyInfo.other3;
  var sql =
    "UPDATE quantec.company_info \
      SET company_name=?, ceo_name=?, company_registration_number=?, \
      location=?, location_en=?, homepage_url=?, email=?, tel=?, fax=?, \
      other1=?, other2=?, other3=? \
      WHERE id=?;";
  var data = [
    company_name,
    ceo_name,
    company_registration_number,
    location,
    location_en,
    homepage_url,
    email,
    tel,
    fax,
    other1,
    other2,
    other3,
    id,
  ];

  conn.query(sql, data, (err, result, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send("OK");
    }
  });
});

module.exports = company;
