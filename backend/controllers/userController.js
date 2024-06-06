// // userController.js

// const userModel = require('../models/userModel');

// module.exports = {
//   createUser: (req, res) => {
//     userModel.createUser(req.body, (err, result) => {
//       if (err) {
//         res.status(500).send({ message: 'Error creating user' });
//       } else {
//         res.status(201).send({ message: 'User created', data: result });
//       }
//     });
//   },

//   getUsers: (req, res) => {
//     userModel.getUsers((err, result) => {
//       if (err) {
//         res.status(500).send({ message: 'Error getting users' });
//       } else {
//         res.status(200).send({ data: result });
//       }
//     });
//   },

//   getUser: (req, res) => {
//     userModel.getUser(req.params.id, (err, result) => {
//       if (err) {
//         res.status(500).send({ message: 'Error getting user' });
//       } else {
//         res.status(200).send({ data: result });
//       }
//     });
//   },

//   updateUser: (req, res) => {
//     userModel.updateUser(req.body, (err, result) => {
//       if (err) {
//         res.status(500).send({ message: 'Error updating user' });
//       } else {
//         res.status(200).send({ message: 'User updated', data: result });
//       }
//     });
//   },

//   deleteUser: (req, res) => {
//     userModel.deleteUser(req.params.id, (err, result) => {
//       if (err) {
//         res.status(500).send({ message: 'Error deleting user' });
//       } else {
//         res.status(200).send({ message: 'User deleted', data: result });
//       }
//     });
//   },
// };