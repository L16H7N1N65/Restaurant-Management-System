const express = require('express');
const router = express.Router();
const restaurantList = require('../controllers/restaurantController');
require('../../app');

// restaurantList Routes
router
  .route('/')
  .get(restaurantList.list_all_restaurants)
  .post(restaurantList.create_a_restaurant);

router
  .route('/:restaurantId')
  .get(restaurantList.read_a_restaurant)
  .put(restaurantList.update_a_restaurant)
  .delete(restaurantList.delete_a_restaurant);

// Error handling middleware
router.use((err, req, res, next) => {
  if (err) {
    res.status(500).send({ error: err.message });
  } else {
    next();
  }
});

module.exports = router;