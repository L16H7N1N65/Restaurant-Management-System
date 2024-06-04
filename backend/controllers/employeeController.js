// employeeController.js

const connection = require('../connection');
const Employee = require('../models/employeesModel')(connection);

//console.log("Employee :"+Employee);

exports.createEmployee = (req, res) => {
  Employee.createEmployee(req.body, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error adding employee");
    } 
    else {
      res.status(200).send(rows);
    }
  });
};

exports.getEmployees = (req, res) => {
  Employee.getEmployees(req.params.restaurant_id, (err, rows) => {

    // console.log(" EMPLOYEE ID :" +req.params.restaurant_id);

    if (err) {
      console.log(err);
      res.status(500).send("Error fetching employees");
    } 
    else {
      res.status(200).send(rows);
    }
  });
};

exports.getEmployee = (req, res) => {
  Employee.getEmployee(req.params.id, req.params.restaurant_id, (err, rows) => {
    
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching employee");
    } 
    else {
      res.status(200).send(rows);
    }
  });
};

exports.updateEmployee = (req, res) => {
  Employee.updateEmployee(req.body.data, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error updating employee");
    } 
    else {
      res.status(200).send(rows);
    }
  });
};

exports.deleteEmployee = (req, res) => {
  Employee.deleteEmployee(req.params.id, req.params.restaurant_id, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting restaurant");
    } 
    else {
      res.status(200).send(rows);
    }
  });
};

exports.deleteEmployeeById = (req, res ) => {
  Employee.deleteEmployeeById(req.params.id, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting employee");
    } 
    else {
      res.status(200).send(rows);
    }
  });
};

// const testData = {
//   id: 1,
//   first_name: 'Ahmed',
//   last_name: 'Belkacem',
//   hire_date: '2018-01-01',
//   restaurant_id: 15
// };

// const testCallback = (err, result) => {
//   if (err) {
//     console.log("Error:", err);
//   } else {
//     console.log("Result:", result);
//   }
// };

// // Employee.createEmployee(testData, testCallback);
// // Employee.getEmployees(testData, testCallback);

// // Employee.getEmployee(1, 15, testCallback);
// Employee.updateEmployee(testData, testCallback);