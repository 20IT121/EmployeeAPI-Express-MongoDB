const express = require('express')
const app = express();

const port = 8080
const log = console.log;

let dbConnect = require('./database'); // dbConnect() will connect to mongo server

const empRouter = require('./controller/employee.router');

// express.json() checks if body of request contains json type ,its going to parse them correctly
app.use(express.json());

//It parses incoming requests with urlencoded payloads
app.use(express.urlencoded()); // URL encoding converts characters into a format that can be transmitted over the Internet (ASCII char-set)

dbConnect(); 

// initial middleware
app.get('/' , (req,res) => {
    log('I am in default middleware')
    res.send(`Hello!!!! Fellow Audiences , Welcome Here`);
})

app.use('/Employee' , empRouter);

app.listen(port, (err)=>{
    if(err) log(err);
    log(`Listening @ PORT ${port}`);
})
