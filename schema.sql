DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;

CREATE TABLE department (
id INT(100) NOT NULL AUTO_INCREMENT,
department_name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee_role (
id INT(100) NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
-- salary DECIMAL(5,2) NOT NULL,
-- department_id INT(100) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INT(100) NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT(100) NOT NULL,
manager_id INT(100) NULL,
PRIMARY KEY (id)
);

INSERT INTO department (department_name) VALUES ("Logistics");
INSERT INTO department (department_name) VALUES ("Engineering");
INSERT INTO department (department_name) VALUES ("Human Resources");

INSERT INTO employee_role (title) VALUES ("QA Analyst");
-- INSERT INTO employee_role (salary) VALUES ("40,000");
-- INSERT INTO employee_role (department_id) VALUES ("1");

SELECT * FROM department;
SELECT * FROM employee_role;