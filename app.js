//app.js
const express = require('express');
const dotenv = require('dotenv');
const connection = require('./backend/connection.js');
//const employeesRoutes = require('./backend/routes/employeesRoutes.js');
//const restaurantRoutes = require('./backend/routes/restaurantRoutes.js');
const routes = require('../backend/routes');

app.use('/employees', routes.employeesRoutes);
app.use('/restaurants', routes.restaurantRoutes);
dotenv.config();

const app = express();
console.log('Starting the application app.js... //app.js');

app.use(express.json());

app.use('/employees', employeesRoutes);
console.log('Employee routes configured.', + employeesRoutes);

app.use('/restaurants', restaurantRoutes);
console.log('Restaurant routes configured.');

// Initialize models and create tables
const initializeModels = async () => {
  try {
    const employeeModel = require('./backend/models/employeesModel.js')(connection);
    if (!employeeModel) {
      console.log('Failed to load Employee model.');
    } else {
      console.log('Employee model loaded.');
      employeeModel.createTable();
      console.log('Employee table creation initiated.');
    }

    const restaurantModel = require('./backend/models/restaurantModel.js')(connection);
    if (!restaurantModel) {
      console.log('Failed to load Restaurant model.');
    } else {
      console.log('Restaurant model loaded.');
      restaurantModel.createTable();
      console.log('Restaurant table creation initiated.');
    }

  } catch (error) {
    console.error('Error initializing models:', error);
  }
};

initializeModels();
console.log('Models initialized and tables ensured. //app.js');

app.use((err, req, res, next) => {
  console.error('Error message:', err.message);
  res.status(500).send('Something broke!');
});

module.exports = app;
console.log('Application module exported. //app.js');
