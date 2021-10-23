SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

# CREATE DATABASE  `tabladb` DEFAULT CHARSET = utf8mb4 DEFAULT COLLATE = utf8mb4_unicode_ci;

USE `tabladb`;

# DROP TABLE user_roles;
# DROP TABLE users;
# DROP TABLE events;
# DROP TABLE venues;




DROP TABLE IF EXISTS user_roles;
CREATE TABLE user_roles(
user_role_id int AUTO_INCREMENT PRIMARY KEY,
user_type VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
user_id int AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(50) UNIQUE NOT NULL,
password VARCHAR(500) NOT NULL,
city VARCHAR(20),
phone_number VARCHAR(20) NOT NULL,
user_role_id int NOT NULL,
FOREIGN KEY (user_role_id) REFERENCES user_roles(user_role_id)
);

DROP TABLE IF EXISTS events;
CREATE TABLE events(
event_id int AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(200) NOT NULL,
artist VARCHAR(50) NOT NULL,
date VARCHAR(50) NOT NULL,
description VARCHAR(200)
);

<<<<<<< HEAD
DROP TABLE IF EXISTS cities;
CREATE TABLE cities (
    city_name VARCHAR(50) NOT NULL,
    city_venues VARCHAR(50) NOT NULL,
    address VARCHAR(50),
    image VARCHAR(250)
);
=======
>>>>>>> 918ba711a81ffd16cc34e8c499b48bab1cee0d1d
DROP TABLE IF EXISTS venues;
CREATE TABLE venues (
venue_id int AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
type VARCHAR(10) NOT NULL,
phone_number VARCHAR(50) NOT NULL,
address VARCHAR(50),
image VARCHAR(250),
city VARCHAR(20),
event_id int,
user_id int NOT NULL,
FOREIGN KEY (event_id) REFERENCES events(event_id),
FOREIGN KEY (user_id) REFERENCES users(user_id)
);
