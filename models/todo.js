const pool = require('../config/PostgreSQL');

const createTodo = async (text) => {
  const result = await pool.query(
    'INSERT INTO todos (text) VALUES ($1) RETURNING *',
    [text]
  );
  return result.rows[0];
};

const getAllTodos = async () => {
  const result = await pool.query('SELECT * FROM todos');
  return result.rows;
};

const getTodoById = async (id) => {
  const result = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
  return result.rows[0];
};

const updateTodo = async (id, text) => {
  const result = await pool.query(
    'UPDATE todos SET text = $1 WHERE id = $2 RETURNING *',
    [text, id]
  );
  return result.rows[0];
};

const deleteTodo = async (id) => {
  const result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = { createTodo, getAllTodos, getTodoById, updateTodo, deleteTodo };
