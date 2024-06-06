//connection.js

require('dotenv').config();
const mysql = require('mysql');
console.log('Connecting to the database... connection.js');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});
console.log('Database connection parameters set. connection.js');

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

module.exports = connection;
console.log('Database connection established.   connection.js');