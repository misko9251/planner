const express = require('express');
const router = express.Router();
const choresController = require('../controllers/chores');

router.get('/', choresController.getChoresPage);
router.post('/insertChore', choresController.insertChore);
router.delete('/deleteChore', choresController.deleteChore);
router.put('/choreDone', choresController.choreDone);
router.put('/choreNotDone', choresController.choreNotDone);

module.exports = router;