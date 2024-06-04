// restaurantController.js

const connection = require('../connection');
const Restaurant = require('../models/restaurantModel')(connection);


exports.create_a_restaurant_table = (req, res) => {
  Restaurant.createTable(req.body,(err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error creating restaurant table");
    } 
    else {
      res.status(200).send({ message: 'Success @exports.create_a_restaurant_table' });
    }
  });
};

exports.list_all_restaurants = (req, res) => {
  Restaurant.getAllRestaurants(req.body, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching restaurants");
    } 
    else {
      res.status(200).send({ message: 'Success @exports.list_all_restaurants' });
    }
  });
};

exports.read_a_restaurant = (req, res) => {
  Restaurant.getRestaurantById(req.params, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error fetching restaurant");
    } 
    else {
      res.status(200).send({ message: 'Success @exports.read_a_restaurant' });
    }
  });
};

exports.create_a_restaurant = (req, res) => {
  Restaurant.createRestaurant(req.body, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error creating restaurant");
    } 
    else {
      res.status(200).send({ message: 'Success @exports.create_a_restaurant' });
    }
  });
};

exports.update_a_restaurant = (req, res) => {
  Restaurant.updateRestaurant(req.body, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error updating restaurant");
    } 
    else {
      res.status(200).send({ message: 'Success @exports.update_a_restaurant ' });
    }
  });
};

exports.delete_a_restaurant = (req, res) => {
  Restaurant.deleteRestaurant(req.body, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting restaurant");
    } 
    else {
      res.status(200).send({ message: 'Success @exports.delete_a_restaurant' });
    }
  });
};

