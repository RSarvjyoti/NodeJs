const { Router } = require("express");
const todoModel = require("../models/todomodel");

const todo = Router();

todo.get('/', async (req, res) =>{
    try{
        const todos = await todoModel.finf();
        res.json({todos : todos});
    }catch(err){
        console.log(err);
        res.status(500).send('Internal server error!')
    }
})


module.exports = todo;
