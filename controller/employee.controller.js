const path = require('path');
console.log(path.basename('C:/Users/ashok/Desktop/EmployeeAPI/controller/employee.controller'))

const Employees = require('../model/employee.model');


const getAllEmployee = (req,res)=>{
    Employees.find({} , (err,emp)=>{
        if(err)
            res.status(500).send(err);
        res.status(200).send(`Employees are \n ${emp}`);
    })
} 

const getSpecificEmployee = (req,res)=>{
    Employees.find( {id : req.params.id} , (err,emp)=>{
        if(err){
            res.status(500).json({
                error : "No employee exist of this id"
            });
            console.log(err);
        }
        res.status(200).send(`Employee is ${emp}`);
        console.log(`Employee of id ${req.params.id} is \n${emp}`)
    })
 }

const addingEmployee = (req,res)=>{

// creating a new document in Employees collection
    var newEmp = new Employees({
        name : req.body.name,
        id : req.body.id,
        salary : req.body.salary
    });

    newEmp.save((err,doc)=>{
        if(err){
            console.log(`Oops!!! SOmething's is wrong`);
            console.log(err);
        }
        else{
            console.log(`Employee Info saved succesfully.....`)
        }
    })
}

module.exports = {
    getAllEmployee,
    getSpecificEmployee,
    addingEmployee
};
