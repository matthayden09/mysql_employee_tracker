const inquirer = require('inquirer')
const mysql = require('mysql');
const cTable = require('console.table');


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

// console.table([
//     {
//       name: 'foo',
//       age: 10
//     }, {
//       name: 'bar',
//       age: 20
//     }
//   ]);

function employeeTracker() {
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
        .then(function (answer) {
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

function viewEmployees() {
    inquirer
        .prompt({
            // prompt
        })
        .then(function (answer) {
            // then
        })
}

function viewDepartments() {
    inquirer
        .prompt({
            // prompt
        })
        .then(function (answer) {
            // then
        })
}

function viewRoles() {
    inquirer
        .prompt({
            // prompt
        })
        .then(function (answer) {
            // then
        })
}

function addEmployee() {
    inquirer
        .prompt({
            // prompt
        })
        .then(function (answer) {
            // then
        })
}

function addDepartment() {
    inquirer
        .prompt({
            // prompt
        })
        .then(function (answer) {
            // then
        })
}

function addRole() {
    inquirer
        .prompt({
            // prompt
        })
        .then(function (answer) {
            // then
        })
}

function updateRole() {
    inquirer
        .prompt({
            // prompt
        })
        .then(function (answer) {
            // then
        })
}

employeeTracker();
