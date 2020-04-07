## HERE THE SQUEMA OF THE TABLE imc_app
DROP DATABASE imc_app;
CREATE DATABASE imc_app;
USE imc_app;
CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    age INTEGER,
    weight FLOAT,
    high FLOAT,
    gender VARCHAR(100),
    icm FLOAT AS ( weight / high),
    PRIMARY KEY (user_id)
);

INSERT INTO users (name, age, weight, high, gender)
VALUES ("Sara", 17, 68.7, 1.20, "Male");

INSERT INTO users (name, age, weight, high, gender)
VALUES ("Juana", 17, 68.754, 1.210, "Famale");

SELECT * FROM users;

SELECT * FROM users ORDER BY user_id DESC;

SELECT icm FROM users ORDER BY user_id DESC;

SELECT icm FROM users ORDER BY user_id DESC LIMIT 1;

SELECT icm FROM users AS total ORDER BY user_id DESC LIMIT 1;

SELECT icm FROM ORDER BY ASC ;

