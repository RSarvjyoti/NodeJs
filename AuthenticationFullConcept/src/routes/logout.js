const { Router } = require('express');
const logoutModel = require('../models/logoutModel');

const logout = Router();

logout.post('/', async (req, res) =>{

    const header = req.headers.authorization;

    if(!header){
        return res.status(400).json({message : "Token is not provided!"});
    }

    const token  = header.split(" ")[1];

    // here we have to check if this particuler token is bloacklisted or not

    const blackListToken = await logoutModel.find({token});
    if(blackListToken){
        return res.status(400).json({message : "Token is not provided!"});
    }

    try{
        // once user logout then token is not valid
        // access the token 
        // store this token into tokenblacklist collection

        const token = new logoutModel({token});
        await token.save();
        res.status(201).json({message : "user is logout successfully"})
        

    }catch(err){
        res.status(400).json({message : ""})
    }
})


module.exports = logout;