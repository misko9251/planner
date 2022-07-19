const express = require('express');
const router = express.Router();
const toDosController = require('../controllers/todos');

router.get('/', toDosController.getTodos);
router.post('/createMovie', toDosController.addMovie);

module.exports = router;