-- Deleting database
DROP DATABASE IF EXISTS burgers_db;

-- Create database
CREATE DATABASE 
burgers_db;

-- Using the database that was just created
USE burgers_db;

-- Creating the burgers table.
CREATE TABLE burgers
(
id int NOT NULL
AUTO_INCREMENT,
burger_name varchar
(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY
(id)
);
