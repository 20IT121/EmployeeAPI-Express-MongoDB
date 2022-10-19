const path = require('path');
console.log(path.basename('C:/Users/ashok/Desktop/EmployeeAPI/controller/employee.router'))

const express = require('express')
const empRouter = express.Router();

const { 
        getAllEmployee ,  // method for displaying all employee info
        getSpecificEmployee ,  // method for displaying specific employee info
        addingEmployee // method for adding an employee info
    } = require('./employee.controller');

empRouter.get('/',getAllEmployee);
empRouter.get('/:id',getSpecificEmployee);
empRouter.post('/',addingEmployee);

module.exports = empRouter;


