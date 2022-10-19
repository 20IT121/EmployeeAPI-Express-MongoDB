const path = require('path');
console.log(path.basename('C:/Users/ashok/Desktop/EmployeeAPI/model/employee.model'));

// imported mongoose module
const mongoose = require('mongoose');
// created a schema
const empSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    id : {
        type : String,
        required : true
    },
    salary : {
        type : String , 
        required : true
    }
});

// creating a collection Employees
const Employees = mongoose.model("Employees" , empSchema);

module.exports = Employees;