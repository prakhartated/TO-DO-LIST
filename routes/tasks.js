const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasks_controller');

router.get('/delete', taskController.deleteTask);
router.post('/add', taskController.addTask);
module.exports = router;
