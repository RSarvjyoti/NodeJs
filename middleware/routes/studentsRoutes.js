const { Router } = require('express');

const student = Router();

student.post('/create', (req,res) =>{
    res.send('Created...');
})

student.put('/update', (req,res) =>{
    res.send('Updated....');
})

student.get('/get', (req,res) =>{
    res.send('Getting......');
})

student.delete('/delete', (req,res) =>{
    res.send('Delete');
})

module.exports = student;