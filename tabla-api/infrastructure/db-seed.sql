/* Initialize DB with some seed data */
USE `tabladb`;

INSERT INTO user_roles (user_type)
VALUES ("admin");
INSERT INTO user_roles (user_type)
VALUES ("customer");
INSERT INTO user_roles (user_type)
VALUES ("host");

INSERT INTO users (first_name, last_name, email, password, city, phone_number, user_role_id)
VALUES ("Erto", "Coskuner", "erto_coskuner@hotmail.com", "12345", "Lefkosa", "05338708798", 1);
INSERT INTO users (first_name, last_name, email, password, city, phone_number, user_role_id)
VALUES ("Erhan", "Ersoy", "erhan0@hotmail.com", "12345", "Lefkosa", "05338402304", 1);
INSERT INTO users (first_name, last_name, email, password, city, phone_number, user_role_id)
VALUES ("Ezgi", "Akdag", "ezgi.e.akdag@gmail.com", "12345", "Lefkosa", "05338837590", 1);
INSERT INTO users (first_name, last_name, email, password, city, phone_number, user_role_id)
VALUES ("Emre", "Ertorun", "emreertorun@hotmail.com", "12345", "Girne", "05428545292", 1);
INSERT INTO users (first_name, last_name, email, password, city, phone_number, user_role_id)
VALUES ("Ahmet", "Akınsql", "gabi1@gmail.com", "12345", "Lefkosa", "05338214396", 2);
INSERT INTO users (first_name, last_name, email, password, city, phone_number, user_role_id)
VALUES ("muzaffer", "muzmuz", "muzmuz@gmail.com", "12345", "Girne", "05338219669", 2);
INSERT INTO users (first_name, last_name, email, password, city, phone_number, user_role_id)
VALUES ("Kopus", "Akdag", "havhav@gmail.com", "12345", "Lefkosa", "05338219123", 3);
<<<<<<< HEAD

=======
>>>>>>> 320dbb085a3a993802e6cff5bc9015ced0a7bd27

INSERT INTO events (name, artist, date, description)
VALUES ("Halk Dansları", "Dans Ekibi", "2021-09-25", "Kültürel Buluşma");
INSERT INTO events (name, artist, date, description)
VALUES ("EDM", "ReverseImpact", "2021-10-01", "Elektronik Dans Muzik");
INSERT INTO events (name, artist, date, description)
VALUES ("Canlı Muzik", "rast", "2021-11-10", "konser");


INSERT INTO venues (name, type, phone_number, address, city, user_id)
VALUES ("papa", "bar", "05338882322", "surlar ici", "Lefkosa", 1);
INSERT INTO venues (name, type, phone_number, address, city, user_id)
VALUES ("ezic", "restorant", "05338888888", "girne liman", "Girne", 1);
INSERT INTO venues (name, type, phone_number, address, city, user_id)
VALUES ("cafe no8", "cafe", "05338211212", "Nadir Sk", "Magusa", 1);
INSERT INTO venues (name, type, phone_number, address, city, user_id)
VALUES ("Pizzavira", "resorant", "05338334433", "Merkez", "Guzelyurt", 1);