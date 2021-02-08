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
salary DECIMAL(8,0) NULL,
department_id INT(100) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employees (
id INT(100) NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT(100) NOT NULL,
manager_id INT(100) NULL,
PRIMARY KEY (id)
);

-- Department table 
INSERT INTO department (department_name) VALUES ("Engineering");
INSERT INTO department (department_name) VALUES ("Logistics");
INSERT INTO department (department_name) VALUES ("Maintenance");

-- Employee role table 
INSERT INTO employee_role(title, salary, department_id)
VALUES ("QA Analyst", "40000", "1");
INSERT INTO employee_role(title, salary, department_id)
VALUES ("Project Manager", "120000", "2");
INSERT INTO employee_role(title, salary, department_id)
VALUES ("Janitor", "50000", "3");

-- Employees table
INSERT INTO employees(first_name, last_name, role_id)
VALUES ("Matt", "Hayden", "1");
INSERT INTO employees(first_name, last_name, role_id)
VALUES ("Nicole", "Roberts", "2");
INSERT INTO employees(first_name, last_name, role_id)
VALUES ("Bob", "Baultrus", "3");


SELECT * FROM department;
SELECT * FROM employee_role;
SELECT * FROM employees;