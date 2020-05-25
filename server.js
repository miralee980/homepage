const fs = require('fs');
const express = require("express");
const cors = require('cors');
// const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

var Users = require('./route/Users');
var Company = require('./route/Company');
// var History = require('./route/History');
// var News = require('./route/News');

app.use('/user', Users);
app.use('/company', Company);
// app.use('/history', History);
// app.use('/news', News);



// const data = fs.readFileSync('./database.json');
// const conf = JSON.parse(data);
// const mysql = require('mysql');
// // const mariadb = require('mariadb');

// const connection = mysql.createConnection({
//   host: conf.host,
//   user : conf.username,
//   password : conf.password,
//   port:conf.port,
//   database:conf.database,
//   charset  : 'utf8',
//   typeCast: function (field, next) {
//     if (field.type == 'VAR_STRING') {
//         return field.string();
//     }
//     return next();
//   }
// });

// connection.connect();

// const pool = mariadb.createPool({
//   host : conf.host,
//   user : conf.username,
//   password: conf.password,
//   post : conf.port,
//   database: conf.database,
//   connectionLimit : 5,
//   charset  : 'utf8',
//   typeCast: function (field, next) {
//     if (field.type == 'VAR_STRING') {
//         return field.string();
//     }
//     return next();
//   }
// });

// app.get('/api/hello',(req, res) => {
//   res.send({message: "Hellp Nodemon!"});
// });

// app.get('/api/companyinfo', (req, res) => {

//   // pool.getConnection()
//   // .then(conn => {
//   //   conn.query('SELECT * FROM company_info')
//   //   .then((rows) =>{
//   //     console.log(rows[0]);
//   //     res.send(rows);
//   //     conn.end();
//   //   })
//   //   .catch(err => {
//   //     console.log(err);
//   //     conn.end();
//   //   })
//   // })
//   // .catch(err => {
//   //   console.log("not connected");
//   // })
  
//   connection.query('SELECT * FROM company_info',(err, rows, fields) => { console.log(rows); res.send(rows);})

// });

// app.post('/api/updateCompanyInfo', (req, res) => {

//   var companyInfo = req.body.companyInfo;
//   console.log(companyInfo);

//   // if(companyInfo.id < 1 || companyInfo.id == null){
//   //   return;
//   // }
//   var id = companyInfo.id;
//   var company_name = companyInfo.company_name;
//   var ceo_name = companyInfo.ceo_name;
//   var company_registration_number = companyInfo.company_registration_number;
//   var location = companyInfo.location;
//   var location_en = companyInfo.location_en;
//   var homepage_url = companyInfo.homepage_url;
//   var email = companyInfo.email;
//   var tel = companyInfo.tel;
//   var fax = companyInfo.fax;
//   var other1 = companyInfo.other1;
//   var other2 = companyInfo.other2;
//   var other3 = companyInfo.other3;
//   var sql = "UPDATE company_info SET company_name=?, ceo_name=?, \
//   company_registration_number=?, location=?, location_en=?, homepage_url=?, email=?, \
//   tel=?, fax=?, other1=?, other2=?, other3=? WHERE id=?;";
//   var data = [company_name, ceo_name, company_registration_number,location,
//     location_en, homepage_url, email, tel, fax, other1, other2, other3,id];

//   // pool.getConnection()
//   // .then(conn => {
//   //   conn.query('SELECT * FROM company_info')
//   //   .then((rows) =>{
//   //     console.log(rows[0]);
//   //     res.send(rows);
//   //     conn.end();
//   //   })
//   //   .catch(err => {
//   //     console.log(err);
//   //     conn.end();
//   //   })
//   // })
//   // .catch(err => {
//   //   console.log("not connected");
//   // })
//   console.log('updateCompanyInfo');
//   connection.query(sql, data,(err, result, fields) => { 
//     if(err) {
//       console.log(err);
//     } else {
//       console.log(result);
//       res.send("OK");
//     }
//   });
// });

app.listen(port, () => console.log(`Lisening on port ${port}`));