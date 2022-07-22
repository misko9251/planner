const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurant');

router.get('/', restaurantController.getRestaurantPage);
router.post('/insertRestaurant', restaurantController.insertRestaurant);

module.exports = router