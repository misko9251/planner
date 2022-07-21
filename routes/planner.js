const express = require('express');
const router = express.Router();
const toDosController = require('../controllers/planner');

router.get('/', toDosController.getTodos);
router.post('/createMovie', toDosController.addMovie);
router.delete('/deleteMovie', toDosController.deleteMovie);
router.put('/movieWatched', toDosController.movieWatched);
router.put('/movieNotWatched', toDosController.movieNotWatched);

module.exports = router;