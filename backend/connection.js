//connection.js

const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
console.log("MySQL module loaded //connection.js");

let connection = mysql.createConnection({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log("Database connected successfully //connection.js");
});

module.exports = connection;
