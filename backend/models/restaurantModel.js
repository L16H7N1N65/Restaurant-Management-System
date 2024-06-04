// models/restaurant.js

// Export a function that takes a database connection
module.exports = (connection) => {
  return {
    createTable: () => {
      let createRestaurantsTable = `CREATE TABLE IF NOT EXISTS restaurants(
                                      id int(11) NOT NULL AUTO_INCREMENT,
                                      name varchar(100) NOT NULL,
                                      city varchar(100) NOT NULL,
                                      nbcouverts int(10) NOT NULL,
                                      terrasse varchar(3) NOT NULL,
                                      parking varchar(3) NOT NULL,
                                      PRIMARY KEY (id)
                                    )`;
      console.log("Creating restaurants table...");
      // Create the tables
      connection.query(createRestaurantsTable, (err) => {
        if (err) {
          console.log("Error creating restaurants table:", err);
        } else {
          console.log("Restaurants table created or already exists.");
        }
      });
    },

    getAllRestaurants: (callback) => {
      let getAllRestaurants = `SELECT * FROM restaurants`;
      console.log("Getting all restaurants...");

      connection.query(getAllRestaurants, (err, results) => {
        if (err) {
          console.log("Error getting restaurants:", err);
        } 
        else {
          console.log("Restaurants retrieved:");
        }
        callback(err, results);
        console.log("line 39 restaurant.js:", callback(err, results));
      });
    },

    getRestaurantById: (id, callback) => {

      let getRestaurantById = `SELECT * FROM restaurants WHERE id  = ('${id}')`;
      console.log(`Getting restaurant with id ${id}...`);

      connection.query(getRestaurantById, (err, results) => {
        if (err) {
          console.log("Error getting restaurant:", err);
        }
        else if (results.length === 0) {
          err = new Error(`No restaurant found with id ${id}`);
          console.log(err.message);
        } 
        else {
          console.log("Restaurant retrieved:", results);
        }
        callback(err, results);
      });
    },

    createRestaurant: (data, callback) => {

      const { name, city, nbcouverts, terrasse, parking } = data;
      const sql = `INSERT INTO restaurants (name, city, nbcouverts, terrasse, parking) VALUES ('${name}', '${city}', '${nbcouverts}', '${terrasse}', '${parking}')`;
      console.log("Creating restaurant...", data);

      connection.query(sql, (err, results) => {
        if (err) {
          console.log("Error creating restaurant:", err);
        } 
        else if (results.affectedRows === 0) {
          err = new Error("No restaurant was created");
          console.log(err.message);
        } 
        else {
          console.log("Restaurant created:", results);
        }
        callback(err, results);
      });
    },

    updateRestaurant: (data, callback) => {
      
      const { id, name, city, nbcouverts, terrasse, parking } = data;
      const sql = `UPDATE restaurants SET name = ('${name}'), city = ('${city}'), nbcouverts = ('${nbcouverts}'), terrasse = ('${terrasse}'), parking = ('${parking}') WHERE id = ('${id}')`;
      console.log(`Updating restaurant with id ${id}...`, data);

      connection.query(sql, (err, results) => {
        if (err) {
          console.log("Error updating restaurant:", err);
        } 
        else if (results.affectedRows === 0) {
          err = new Error(`No restaurant found with id ${id}`);
          console.log(err.message);
        } 
        else {
          console.log("Restaurant updated:", results);
        }
        callback(err, results);
      });
    },

    deleteRestaurant: (id, callback) => {
      
      const sql = `DELETE FROM restaurants WHERE id = ('${id}') `;
      console.log(`Deleting restaurant with id ${id}...`);

      connection.query(sql, (err, results) => {
        if (err) {
          console.log("Error deleting restaurant:", err);
        } 
        else if (results.affectedRows === 0) {
          err = new Error(`No restaurant found with id ${id}`);
          console.log(err.message);
        } 
        else {
          console.log("Restaurant deleted:", results);
        }
        callback(err, results);
      });
    },
  };
};
