const { Router } = require('express');

const teachers = Router();

teachers.post('/create', (req,res) =>{
    res.send('Created...');
})

teachers.put('/update', (req,res) =>{
    res.send('Updated....');
})

teachers.get('/get', (req,res) =>{
    res.send('Getting......');
})

teachers.delete('/delete', (req,res) =>{
    res.send('Delete');
})


module.exports = teachers;