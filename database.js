// {
//     "host" : "uws7-020.cafe24.com",
//     "port" : "3306",
//     "database" : "quantec",
//     "username" : "quantec",
//     "password" : "quant0330"
// }

// const data = fs.readFileSync('./database.json');
// const conf = JSON.parse(data);
const mysql = require('mysql');
// const mariadb = require('mariadb');

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

const database = mysql.createConnection({
    host: "uws7-020.cafe24.com",
    user : "quantec",
    password : "quant0330",
    port:"3306",
    database:"quantec",
    charset  : 'utf8',
    typeCast: function (field, next) {
      if (field.type == 'VAR_STRING') {
          return field.string();
      }
      return next();
    }
  });

  database.connect();
module.exports = database;