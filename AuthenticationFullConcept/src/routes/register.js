const { Router } = require('express');
const registerModel = require('../models/registerModel');
const bcrypt = require('bcrypt');

const register = Router();

register.get('/', (req, res) =>{
    res.send('This is register page');
})

register.post('/', async (req, res) =>{
    const {username, email, password} = req.body;
    try{
        if(!username || !email || !password){
          return  res.status(400).json({message : "Not a vailid user!"})
        }

        // Step - 1 : 
        // before creating the user we have to if that particular user is already present or not

        const exitsUser = await registerModel.findOne({email : email});

        if(exitsUser){
            return  res.status(400).json({message : "Already rgister try to login!"});
        }

        // Step 2 : npm i bcrypt

        const hashedPassword = bcrypt.hash(password, 12, async (err, result)=>{
            if(err) console.log(err);
            else{
                const createUser = new registerModel({username, email, password:result});
                console.log(createUser);
                await createUser.save();
                return res.status(201).json({message: "User is register successfully!"});
            }
        })
    }catch(err){
        console.log(err);
    }
})


module.exports = register;
