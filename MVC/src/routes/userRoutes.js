const { Router } = require('express');
const usserModel = require('../models/userModules');

const userRoute = Router();

userRoute.get('/', async (req, res) => {
    try {
        const data = await usserModel.findOne();
        res.json(data); 
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

userRoute.post('/', async (req, res) => {
    try {
        const payload = req.body;
        const newUser = new usserModel(payload);
        await newUser.save();
        res.status(201).json({
            message: 'New data added successfully!',
            user: newUser
        });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});


userRoute.put('/', (req, res) =>{
    
})

userRoute.patch('/', (req, res) =>{
    
})

userRoute.delete('/', (req, res) =>{
    
})

module.exports = userRoute;