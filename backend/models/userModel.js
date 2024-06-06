// // userModel.js
// const bcrypt = require("bcrypt");

// module.exports = (connection) => {
//   return {
//     createTable: () => {
//       let createUserTable = `CREATE TABLE IF NOT EXISTS users(
//                                 id int(11) NOT NULL AUTO_INCREMENT,
//                                 name varchar(100) NOT NULL,
//                                 email varchar(100) NOT NULL,
//                                 password varchar(100) NOT NULL,
//                                 image varchar(100),
//                                 isAdmin boolean NOT NULL,
//                                 PRIMARY KEY (id)
//                             )`;

//       connection.query(createUserTable, (err) => {
//         if (err) {
//           console.log("Error creating users table:", err);
//         } else {
//           console.log("Users table created or already exists.");
//         }
//       });
//     },

//     createUser: (data, callback) => {
//       const salt = bcrypt.genSaltSync(10);
//       data.password = bcrypt.hashSync(data.password, salt);

//       const { name, email, password, image, isAdmin } = data;

//       const sql = `INSERT INTO users (name, email, password, image, isAdmin) VALUES ('${name}', '${email}', '${password}', '${image}', '${isAdmin}')`;

//       connection.query(sql, (err, result) => {
//         if (err) {
//           console.log("Error creating user:", err);
//         } else {
//           console.log("User created:", result);
//         }
//         callback(err, result);
//       });
//     },

//     getUsers: (callback) => {
//       const sql = `SELECT * FROM users`;

//       connection.query(sql, (err, result) => {
//         if (err) {
//           console.log("Error getting users:", err);
//         } else {
//           console.log("Users retrieved:", result);
//         }
//         callback(err, result);
//       });
//     },

//     getUser: (id, callback) => {
//       const sql = `SELECT * FROM users WHERE id = '${id}'`;

//       connection.query(sql, (err, result) => {
//         if (err) {
//           console.log("Error getting user:", err);
//         } else {
//           console.log("User retrieved:", result);
//         }
//         callback(err, result);
//       });
//     },

//     updateUser: (data, callback) => {
//       const { id, name, email, password, image, isAdmin } = data;
//       const sql = `UPDATE users SET name = '${name}', email = '${email}', password = '${password}', image = '${image}', isAdmin = '${isAdmin}' WHERE id = '${id}'`;

//       connection.query(sql, (err, result) => {
//         if (err) {
//           console.log("Error updating user:", err);
//         } else {
//           console.log("User updated:", result);
//         }
//         callback(err, result);
//       });
//     },

//     deleteUser: (id, callback) => {
//       const sql = `DELETE FROM users WHERE id = '${id}'`;

//       connection.query(sql, (err, result) => {
//         if (err) {
//           console.log("Error deleting user:", err);
//         } else {
//           console.log("User deleted:", result);
//         }
//         callback(err, result);
//       });
//     },
//   };
// };
