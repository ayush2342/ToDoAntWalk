# TODOANTWALK

## Overview
A simple backend service using Express JS for managing todos with Create, Read, Update, and Delete (CRUD) operations.

## Requirements
- Passwordless (magic link) user registration and login.
- RESTful API endpoints.
- PostgreSQL for data storage.
- Idempotent requests.
- No ORM.
- Optimized, secure, scalable, cleaner, reusable, modular, and easy-to-read code.
- Git for version control.

## Getting Started

### Prerequisites
- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/todoantwalk.git
   cd todoantwalk

2. Install dependencies:
npm install

3. Create a .env file at the root of the project and configure your database connection:

PG_USER=your_postgres_user
PG_HOST=localhost
PG_DATABASE=your_database_name
PG_PASSWORD=your_password
PG_PORT=5432
JWT_SECRET=your_jwt_secret

4. Initialize the database:
psql -U your_postgres_user -d your_database_name -f init.sql

5. Running the Service
npm start


6. API Endpoints

## Authentication
POST /auth/register - Register a new user.
POST /auth/login - Login with email and password.

## Todos
POST /api/todos - Create a new todo.
GET /api/todos - Get all todos.
GET /api/todos/:id - Get a todo by ID.
PUT /api/todos/:id - Update a todo by ID.
DELETE /api/todos/:id - Delete a todo by ID.