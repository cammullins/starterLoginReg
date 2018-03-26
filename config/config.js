const fs = require('fs');
var Sequelize = require("sequelize");

require('dotenv').config();
module.exports = {
  "development": {
    username: process.env.DB_USER,
    password: process.env.DB_Password,
    database: process.env.DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port":3307
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": 3306
  },
  "production": {
    username: process.env.DB_USER,
    password: process.env.DB_Password,
    database: process.env.DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  }
}
