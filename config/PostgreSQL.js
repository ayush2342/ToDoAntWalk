const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PG_USER || 'adminUser',
  host: process.env.PG_HOST || 'localhost',
  database: process.env.PG_DATABASE || 'todos',
  password: process.env.PG_PASSWORD || 'qwerty@101',
  port: process.env.PG_PORT || 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
