const express = require('express');
const teachers = require('./routes/teachersRoute');
const student = require('./routes/studentsRoutes');

const app = express();

require('dotenv').config();
const port = process.env.PORT || 4000

// Middilewsre => Like a function it work between server 

app.use((req, res, next) =>{
    if(req.query.apikey){
        return res.status(401).send('No Api key prodided!');
    }
    next();
})

app.get('/', (req, res) =>{
    res.send('Hello!');
})

// app.use('/teachers', teachers);
// app.use('/students', student);



app.listen(port, () =>{
    console.log(`Server is running at port no. ${port}`);
})