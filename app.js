//app.js

const express = require('express');
const dotenv = require('dotenv');
const connection = require('./backend/connection.js');
const employeesRoutes = require('./backend/routes/employeesRoutes.js');
const restaurantRoutes = require('./backend/routes/restaurantRoutes.js');
// const employeeModel = require('./models/employees.js');
// const restaurantModel = require('./models/restaurant.js');

dotenv.config();

const app = express();

console.log('Starting the application app.js... //app.js');

app.use(express.json());
// console.log('Express JSON middleware configured.');
// console.log(">>>>>>" +employeesRoutes);
app.use('/api/employees', employeesRoutes);
// console.log('Employee routes configured.');

app.use('/api/restaurants', restaurantRoutes);
// console.log('Restaurant routes configured.');



// Initialize models and create tables
const initializeModels = () => {
  // console.log('Initializing models...');
  
  const employeeModel = require('./backend/models/employees.js')(connection);
  // console.log('Employee model loaded.');

  const restaurantModel = require('./backend/models/restaurant.js')(connection);
  // console.log('Restaurant model loaded.');

  // employeeModel.createTable();
  // console.log('Employee table creation initiated.');

};

initializeModels();
console.log('Models initialized and tables ensured. //app.js');

// Errors handling ------------------------------------------------here !!!!!

// app.use((req, res, err) => {
//   // console.error('Error stack:', err.stack);
//   console.log('Error message:', req, err.message);

//   res.status(500).send('Something broke!');
//   console.log('Error response sent.');
// });



module.exports = app;
console.log('Application module exported. //app.js');
