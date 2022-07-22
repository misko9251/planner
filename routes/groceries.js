const express = require('express');
const router = express.Router();
const groceryController = require('../controllers/groceries');

router.get('/', groceryController.getGroceries);
router.post('/insertGrocery', groceryController.insertGrocery);
router.delete('/deleteGrocery', groceryController.deleteGrocery);
router.put('/groceryAcquired', groceryController.groceryAcquired);
router.put('/groceryStillNeeded', groceryController.groceryStillNeeded);

module.exports = router;