const { Router } = require('express');
const userModel = require('../../models/userModel');
const loginRoute = Router();
var jwt = require('jsonwebtoken');


loginRoute.post('/', async (req, res) =>{
    const isValid =  await userModel.findOne(req.body);

    // here genarate the token
    var token = jwt.sign({ foo: 'bar' }, 'secret');

    if(isValid){
        res.send({'msg': "Login successfully!", 'token' : token});
    }else{
        res.send('Login failed invailid credentials');
    }
})



module.exports = loginRoute;