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