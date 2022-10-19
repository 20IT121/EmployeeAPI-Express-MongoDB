const path = require('path');
console.log(path.basename('C:/Users/ashok/Desktop/EmployeeAPI/database'))

// connecting to mongodb local server
let mongoose = require('mongoose');

let dbConnect = ()=>{
    var url = 'mongodb://localhost:27017/Employee';
    mongoose.connect(url , {useNewUrlParser : true})
        .then(()=>{
            console.log("Connected to Mongo!!!");
        })
        .catch((err)=>{
            console.log(`OH NO! MONGO CONNECTION ERROR!`);
            console.log(err);
        })
}
module.exports = dbConnect;