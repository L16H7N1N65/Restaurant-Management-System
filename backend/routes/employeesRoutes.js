const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");
//require("../../app");

// const employeesRoutes = require("./routes/employeesRoutes");
// app.use("/api/employees", employeesRoutes);

// // employeeList Routes
// router
//   .route("/")
//   // .route("/api/restaurants/:rid/employees")
//   .get(employeeController.getEmployees)
//   .post(employeeController.createEmployee)
//   .delete(employeeController.deleteEmployeeById)
//   .get(employeeController.getEmployee); // modified
// router
//   .route("/:id")
//   // .route("/api/restaurants/:rid/employees/:id")

//   .put(employeeController.updateEmployee)
//   .delete(employeeController.deleteEmployee);

// create an employee
router.post("/", (req, res, next) => {
  console.log("POST /employees");
  employeeController.createEmployee(req.body, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.json(result);
    }
  });
});

// get all employees
router.get("/:restaurant_id", (req, res, next) => {
  console.log("GET /employees");
  employeeController.getEmployees(req.params.restaurant_id, (err, result) => {
    if (err) {
      console.log("Error getting employees:", err);
      res.status(500).send(err);
    } else {
      console.log("Employees retrieved:", result);
      res.json(result);
    }
  });
});

// delete an employee
router.delete("/:id/:restaurant_id", (req, res, next) => {
  console.log("DELETE /employees");
  employeeController.deleteEmployee(
    req.params.id,
    req.params.restaurant_id,
    (err, result) => {
      if (err) {
        console.log("Error deleting employee:", err);
        res.status(500).send(err);
      } else {
        console.log("Employee deleted:", result);
        res.json(result);
      }
    }
  );
});

// get an employee
router.get("/:restaurant_id/:id", (req, res, next) => {
  console.log("GET /employee");
  employeeController.getEmployee(
    req.params.id,
    req.params.restaurant_id,
    (err, result) => {
      if (err) {
        console.log("Error getting employee:", err);
        res.status(500).send(err);
      } else {
        console.log("Employee retrieved:", result);
        res.json(result);
      }
    }
  );
});

// get all employees, not attached to any restaurant
router.get("/", (req, res, next) => {
  console.log("GET /employees");
  employeeController.getAllEmployees((err, result) => {
    if (err) {
      console.log("Error getting all employees:", err);
      res.status(500).send(err);
    } else {
      console.log("All employees retrieved:", result);
      res.json(result);
    }
  });
});

// update an employee
router.put("/:id", (req, res, next) => {
  console.log("PUT /employees:id");
  req.body.id = req.params.id;
  employeeController.updateEmployee(req.body, (err, result) => {
    if (err) {
      console.log("Error updating employee:", err);
      res.status(500).send(err);
    } else {
      console.log("Employee updated:", result);
      res.json(result);
    }
  });
});

// delete an employee by id
router.delete("/:id", (req, res, next) => {
  console.log("DELETE /employees:id");
  employeeController.deleteEmployeeById(req.params.id, (err, result) => {
    if (err) {
      console.log("Error deleting employee:", err);
      res.status(500).send(err);
    } else {
      console.log("Employee deleted:", result);
      res.json(result);
    }
  });
});

module.exports = router;
