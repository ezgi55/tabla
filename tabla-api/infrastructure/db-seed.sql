/* Initialize DB with some seed data */
USE 'Tabla_Events_db';

INSERT INTO users (user_id, first_name, last_name, email, password, city, phone_number)
VALUES ("1","Erto", "Coskuner", "erto_coskuner@hotmail.com", SHA512(CONCAT("12345", "PASSWORD") 224), "Lefkosa", "05338708798");
INSERT INTO users (user_id, first_name, last_name, email, password, city, phone_number)
VALUES ("2","Erhan", "Ersoy", "erhan0@hotmail.com", SHA512(CONCAT("12345", "PASSWORD") 224), "Lefkosa", "05338402304");
INSERT INTO users (user_id, first_name, last_name, email, password, city, phone_number)
VALUES ("3","Ezgi", "Akdag", "ezgiakdag@hotmail.com", SHA512(CONCAT("12345", "PASSWORD") 224), "Lefkosa", "05338837590");
INSERT INTO users (user_id, first_name, last_name, email, password, city, phone_number)
VALUES ("4","Emre", "Ertorun", "emreertorun@hotmail.com", SHA512(CONCAT("12345", "PASSWORD") 224), "Girne", "05428545292");
INSERT INTO users (user_id, first_name, last_name, email, password, city, phone_number)
VALUES ("5","Cem", "Gokdel", "cemgokdel@gmail.com", SHA512(CONCAT("12345", "PASSWORD") 224), "Girne", "05338219696");

INSERT INTO events (event_name, event_artist, event_date, event_city, event_description, adress,)
VALUES ("Halk Dansları" "Dans Ekibi" "25-09-2021" "Lefkosa" "Kültürel Buluşma" "bandabulya");
INSERT INTO events (event_id, event_name, event_artist, event_date, event_city, event_description, adress,)
VALUES ("EDM" "ReverseImpact" "1-10-2021" "Lefkosa" "Elektronik Dans Muzik" "Imagine");
INSERT INTO events (event_id, event_name, event_artist, event_date, event_city, event_description, adress,)
VALUES ("Canlı Muzik" "rast" "10-11-2021" "girne" "konser" "Girne Liman");

INSERT INTO cities (city_name, city_venues, adress)
VALUES ("Lefkosa","papa" "Surlar ici");
INSERT INTO cities (city_name, city_venues, adress)
VALUES ("Girne","Boat Cafe" "Liman");
INSERT INTO cities (city_name, city_venues, adress)
VALUES ("Magusa","Cafe no8" "Nadir Sk");
INSERT INTO cities (city_name, city_venues, adress)
VALUES ("Guzelyurt","pizzavira" "merkez");

INSERT INTO venues (venue_name, venue_type, phone_number, address)
VALUES ("papa" "bar" "05338882322" "surlar ici");
INSERT INTO venues (venue_name, venue_type, phone_number, address)
VALUES ("ezic" "restorant" "05338888888" "girne liman");
INSERT INTO venues (venue_name, venue_type, phone_number, address)
VALUES ("cafe no8" "cafe" "05338211212" "Nadir Sk");
INSERT INTO venues (venue_name, venue_type, phone_number, address)
VALUES ("Pizzavira" "resorant" "05338334433" "Merkez");

//test