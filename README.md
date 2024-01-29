# E-Commerce Application

## Overview

This is a simple E-Commerce application backend built with Node.js and MySQL.

Prerequisites
- Node.js 
- MySQL database

.env file Configuration
- APP_PORT=application_port
- MYSQL_PORT=DB_part
- MYSQL_HOST=localhost
 - MYSQL_USER=username
-MYSQL_PASSWORD=password
-MYSQL_DATABASE=database_name
-JWT_KEY=JWT _token_key
-SESSION_SECRET= session_key
Replace localhost, username, password, and database_name with your MySQL server details.

API Endpoints
products
* POST /recommend/ - Create a new product.
* GET /recommend/ - Get a list of all products.
* GET /recommend/product/:id - Get details of a specific product by ID.

user
* POST /auth/ - Create a new user.
* GET /auth/ - Get a list of all users.
* GET /auth/profile/:id - Get details of a specific user by ID.

-Redux











