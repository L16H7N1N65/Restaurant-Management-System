// models/employee.js

module.exports = (connection) => {
  return {
    createTable: () => {
      let createEmployeesTable = `CREATE TABLE IF NOT EXISTS employees(
                                    id int(11) NOT NULL AUTO_INCREMENT,
                                    first_name varchar(100) NOT NULL,
                                    last_name varchar(100) NOT NULL,
                                    hire_date DATE NOT NULL,
                                    restaurant_id int(11) NOT NULL,
                                    PRIMARY KEY (id),
                                    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
                                  )`;

      connection.query(createEmployeesTable, (err) => {
        if (err) {
          console.log("Error creating employees table:", err);
        } 
        else {
          console.log("Employees table created or already exists.");
        }
      });
    },
    
    createEmployee: (data, callback) => {
      
      const {id, first_name, last_name, hire_date, restaurant_id } = data ;

      const sql = `INSERT INTO employees (id, first_name, last_name, hire_date, restaurant_id) VALUES ('${id}', '${first_name}', '${last_name}', '${hire_date}', '${restaurant_id}')`;
      console.log(data);
      
      connection.query(sql, (err, result) => {
        if (err) {
          console.log("Error creating employee:", err);
        } 
        else {
          console.log("Employee created:", result);
        }
        callback(err, result);
      });
    },

    getEmployees: (restaurant_id, callback) => {

      const sql = `SELECT * FROM employees WHERE restaurant_id = '${restaurant_id}'`;
      
      connection.query(sql, (err, result) => {
        if (err) {
          console.log("Error getting employees:", err);
        } 
        else {
          console.log("Employees retrieved:", result);
        }
        callback(err, result);
      });
    },

    getEmployee: (id, restaurant_id, callback) => {
      const sql = `SELECT * FROM employees WHERE id = '${id}' AND restaurant_id = '${restaurant_id}'`;
      connection.query(sql, (err, result) => {
        if (err) {
          console.log("Error getting employee:", err);
        } 
        else {
          console.log("Employee retrieved:", result);
        }
        callback(err, result);
      });
    },

    updateEmployee: (data, callback) => {
      const { id, first_name, last_name, hire_date, restaurant_id } = data;
      const sql = `UPDATE employees SET  first_name = '${first_name}', last_name = '${last_name}',  hire_date = '${hire_date}', restaurant_id = '${restaurant_id}' WHERE id = '${id}'`;
      connection.query(sql, (err, result) => {
        if (err) {
          console.log("Error updating employee:", err);
        } 
        else {
          console.log("Employee updated:", result);
        }
        callback(err, result);
      });
    },

    deleteEmployee: (id, restaurant_id, callback) => {
      const sql = `DELETE FROM employees WHERE id = '${id}' AND restaurant_id = '${restaurant_id}'`;
      connection.query(sql, (err, result) => {
        if (err) {
          console.log("Error deleting employee:", err);
        } 
        else {
          console.log("Employee deleted:", result);
        }
        callback(err, result);
      });
    },

    deleteEmployeeById: (id, callback) => {
      const sql = `DELETE FROM employees WHERE id = '${id}'`;

      connection.query(sql, (err, result) => {
        if (err) {
          console.log("Error deleting employee by id:", err);
        } 
        else {
          console.log("Employee by id deleted:", result);
        }
        callback(err, result);
      });
    },
  };
};

