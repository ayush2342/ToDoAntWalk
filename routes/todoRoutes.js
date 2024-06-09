const express = require('express');
const router = express.Router();
const passport = require('passport');
const todoController = require('../controllers/todoController');

router.post('/todos', passport.authenticate('jwt', { session: false }), todoController.createTodo);
router.get('/todos', passport.authenticate('jwt', { session: false }), todoController.getAllTodos);
router.get('/todos/:id', passport.authenticate('jwt', { session: false }), todoController.getTodoById);
router.put('/todos/:id', passport.authenticate('jwt', { session: false }), todoController.updateTodo);
router.delete('/todos/:id', passport.authenticate('jwt', { session: false }), todoController.deleteTodo);

module.exports = router;
