/*eslint-env browser*/

function displayMenu() {
    "use strict";
     window.console.log("Welcome to the Employee Management System");
     window.console.log("");
     window.console.log("COMMAND MENU");
     window.console.log("show - Show all employees");
     window.console.log("add - Add a new employee");
     window.console.log("del - Delete an existing employee");
     window.console.log("exit - Exit the application");
     window.console.log("");
}


function showEmployees(arr) {
    "use strict";
    var i = 1;
    arr.forEach(function (employee){
        window.console.log(String(i) + "." + employee);
        i += 1;
    });
    window.console.log("");
}

function addEmployee(arr) {
    "use strict"
    var employee = window.prompt("Enter the employee\'s name");
    arr.push(employee);
    window.console.log(employee + " was added. \n");
}

function deleteEmployee(arr) {
    "use strict";
    var num, employee;
    num = parseInt(window.prompt("Employee number to delete"), 10);
    if ( num < 1 || num > arr.length) {
        window.alert("Invalid number!");
    } else {
        delete arr[num - 1];
        window.console.log("Employee number " + num + " was deleted.");
    }
}

function main() {
    "use strict";
    var employeeList, command;
    
    displayMenu();
     
    employeeList = ["John Zimmerman",
                   "Sally Smith",
                   "Fred Franklin",
                   "John Smith",
                   "Jane Caruthers"]; 
    
    while(true) {
        command = window.prompt("Enter command");
        if (command !== null) {
           if (command === "show") {
               showEmployees(employeeList);
           } else if (command === "add") {
               addEmployee(employeeList);
           } else if (command === "del") {
               deleteEmployee(employeeList);
           } else if (command === "exit") {
               break;
           } else {
            window.console.log("That is not a valid command");
           }
        } else {
            break;
        }
        }
    window.console.log("Program terminated.");
}
main();