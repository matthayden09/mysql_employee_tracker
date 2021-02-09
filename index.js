const inquirer = require('inquirer')
const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_tracker_db'
});

connection.connect(err => {
    if (err) throw err
    console.log(`Connect to mysql on thread ${connection.threadId}`)
});

const employeeTracker = () => {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all employees",
                "View all departments",
                "View all roles",
                "Add new employee",
                "Add new department",
                "Add new role",
                "Update employee role",
                "Exit"
            ]
        })
        .then(answer => {
            switch (answer.action) {
                case "View all employees":
                    viewEmployees();
                    break;

                case "View all departments":
                    viewDepartments();
                    break;

                case "View all roles":
                    viewRoles();
                    break;

                case "Add new employee":
                    addEmployee();
                    break;

                case "Add new department":
                    addDepartment();
                    break;

                case "Add new role":
                    addRole();
                    break;

                case "Update employee role":
                    updateRole();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
}

const viewEmployees = () => {
    const query = "SELECT first_name, last_name, role_id, manager_id FROM employees";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        employeeTracker();
    });
}

const viewDepartments = () => {
    const query = "SELECT department_name FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        employeeTracker();
    });
}

const viewRoles = () => {
    const query = "SELECT title, salary, department_id FROM employee_role";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        employeeTracker();
    });
}

const addEmployee = () => {
    inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "What is the employee's first name?"
        },
        {
            name: "lastName",
            type: "input",
            message: "What is the employee's last name?"
        },
        {
            name: "roleId",
            type: "input",
            message: "What is the employee's role ID?"

        }])
        .then(answer => {
            connection.query(
                "INSERT INTO employees(first_name, last_name, role_id)VALUES (?,?,?)",
                [
                    answer.firstName,
                    answer.lastName,
                    answer.roleId
                ], function (err, res) {
                    if (err) throw err;
                }
            )
            employeeTracker()
            viewEmployees()
        })
}

const addDepartment = () => {
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "What is the name of the new department?"
        })
        .then(function (answer) {
            connection.query(`INSERT INTO department (department_name) VALUES ("${answer.department}")`, function (err) {
                if (err) throw err;
                console.table(answer)
                employeeTracker();
                viewDepartments();
            })
        })
}

const addRole = () => {
    inquirer
        .prompt({
            // prompt
        })
        .then(function (answer) {
            // then
        })
}

const updateRole = () => {
    inquirer
        .prompt({
            // prompt
        })
        .then(function (answer) {
            // then
        })
}

employeeTracker();
