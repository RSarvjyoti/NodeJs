const { Router } = require('express');
const userModel = require('../../models/userModel');

const signup = Router();

signup.post('/', async (req, res) =>{
    console.log(req.body);
    const user = new userModel(req.body);
    await user.save();
    res.send("Sign up successfully!");
})

module.exports = signup;