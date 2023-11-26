require("dotenv").config({
  path: __dirname + "/./../../../.env",
});

module.exports = {
  "development": {
    "username": process.env.MYSQLUSER,
    "password": process.env.MYSQLPASSWORD,
    "database": process.env.MYSQLDATABASE,
    "host": process.env.MYSQLHOST,
    "port": process.env.MYSQLPORT,
    "dialect": "mysql",
   
    "operatorsAliases": false,
    "timezone": "-03:00"
  },
  "test": {
    "username": process.env.MYSQLUSER,
    "password": process.env.MYSQLPASSWORD,
    "database": process.env.MYSQLDATABASE,
    "host": process.env.MYSQLHOST,
    "port": process.env.MYSQLPORT,
    "dialect": "mysql",
   
    "operatorsAliases": false,
    "timezone": "-03:00"
  },
  "production": {
    "username": process.env.MYSQLUSER,
    "password": process.env.MYSQLPASSWORD,
    "database": process.env.MYSQLDATABASE,
    "host": process.env.MYSQLHOST,
    "port": process.env.MYSQLPORT,
    "dialect": "mysql",
   
    "operatorsAliases": false,
    "timezone": "-03:00"
  }
}
