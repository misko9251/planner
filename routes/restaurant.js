const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurant');

router.get('/', restaurantController.getRestaurantPage);
router.post('/insertRestaurant', restaurantController.insertRestaurant);
router.put('/restaurantVisited', restaurantController.restaurantVisited);
router.put('/restaurantNotVisited', restaurantController.restaurantNotVisited);
router.delete('/removeRest', restaurantController.removeRest);

module.exports = router