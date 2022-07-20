const express = require('express');
const router = express.Router();
const toDosController = require('../controllers/planner');

router.get('/', toDosController.getTodos);
router.post('/createMovie', toDosController.addMovie);
router.delete('/deleteMovie', toDosController.deleteMovie);

module.exports = router;