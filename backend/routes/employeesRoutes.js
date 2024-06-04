const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
require("../../app");

// const employeesRoutes = require("./routes/employeesRoutes");
// app.use("/api/employees", employeesRoutes);

// employeeList Routes
router
  .route("/")
  // .route("/api/restaurants/:rid/employees")
  .get(employeeController.getEmployees)
  .post(employeeController.createEmployee)
  .delete(employeeController.deleteEmployeeById)
  .get(employeeController.getEmployee); // modified
router
  .route("/:id")
  // .route("/api/restaurants/:rid/employees/:id")
  
  .put(employeeController.updateEmployee)
  .delete(employeeController.deleteEmployee);

module.exports = router;
