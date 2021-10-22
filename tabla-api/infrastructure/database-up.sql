SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

# CREATE DATABASE  `tabladb` DEFAULT CHARSET = utf8mb4 DEFAULT COLLATE = utf8mb4_unicode_ci;

USE `tabladb`;

# DROP TABLE users;
# DROP TABLE events;
# DROP TABLE cities;
# DROP TABLE venues;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
user_id int AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(50) UNIQUE NOT NULL,
password VARCHAR(500) NOT NULL,
city VARCHAR(20),
phone_number VARCHAR(20) NOT NULL
);

DROP TABLE IF EXISTS events;
CREATE TABLE events(
event_id int AUTO_INCREMENT PRIMARY KEY,
event_name VARCHAR(200) NOT NULL,
event_artist VARCHAR(50) NOT NULL,
event_date DATE NOT NULL,
event_city VARCHAR(50) NOT NULL,
event_description VARCHAR(200),
address VARCHAR(50),
image VARCHAR(250)
);

DROP TABLE IF EXISTS cities;
CREATE TABLE cities (
    city_name VARCHAR(50) NOT NULL,
    city_venues VARCHAR(50) NOT NULL,
    address VARCHAR(50),
    image VARCHAR(250)
);
DROP TABLE IF EXISTS venues;
CREATE TABLE venues (
venue_id int AUTO_INCREMENT PRIMARY KEY,
venue_name VARCHAR(50) NOT NULL,
venue_type VARCHAR(10) NOT NULL,
phone_number VARCHAR(50) NOT NULL,
address VARCHAR(50),
image VARCHAR(250)
);