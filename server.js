const fs = require('fs');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
// const mysql = require('mysql');
const mariadb = require('mariadb');

// const connection = mysql.createConnection({
//   host: conf.host,
//   user : conf.username,
//   password : conf.password,
//   port:conf.port,
//   database:conf.database,
//   charset  : 'utf8'
// });

// connection.connect();

const pool = mariadb.createPool({
  host : conf.host,
  user : conf.username,
  password: conf.password,
  post : conf.port,
  database: conf.database,
  connectionLimit : 5,
  charset  : 'utf8',
  typeCast: function (field, next) {
    if (field.type == 'VAR_STRING') {
        return field.string();
    }
    return next();
  }
});

app.get('/api/hello',(req, res) => {
  res.send({message: "Hellp Nodemon!"});
});

app.get('/api/companyinfo', (req, res) => {

  pool.getConnection()
  .then(conn => {
    conn.query('SELECT * FROM company_info')
    .then((rows) =>{
      console.log(rows[0]);
      res.send(rows);
      conn.end();
    })
    .catch(err => {
      console.log(err);
      conn.end();
    })
  })
  .catch(err => {
    console.log("not connected");
  })
  
  // connection.query('SELECT * FROM company_info',(err, rows, fields) => { console.log(rows); res.send(rows);})

});

app.listen(port, () => console.log(`Lisening on port ${port}`));