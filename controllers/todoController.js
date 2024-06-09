const Todo = require('../models/todo');

exports.createTodo = async (req, res, next) => {
  try {
    const { text } = req.body;
    const todo = await Todo.createTodo(text);
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

exports.getAllTodos = async (req, res, next) => {
  try {
    const todos = await Todo.getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

exports.getTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todo.getTodoById(id);
    if (!todo) {
      res.status(404).send('Todo not found');
    } else {
      res.status(200).json(todo);
    }
  } catch (error) {
    next(error);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const todo = await Todo.updateTodo(id, text);
    if (!todo) {
      res.status(404).send('Todo not found');
    } else {
      res.status(200).json(todo);
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todo.deleteTodo(id);
    if (!todo) {
      res.status(404).send('Todo not found');
    } else {
      res.status(204).send();
    }
  } catch (error) {
    next(error);
  }
};
