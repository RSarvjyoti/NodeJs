const { Router } = require('express');
const registerModel = require('../models/registerModel');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const login = Router();

login.get('/', (req, res) =>{
    res.send('This is login page');
})

login.post('/', async (req, res) =>{
    const {email, password} = req.body;

    try{

        // step 1 : 

        if(!email || !password){
            return res.status(400).json({message: "Not a vailid user"});
        }

        // step 2 : We have to check already pressent or not

        const exists = await registerModel.findOne({email : email});

        if(!exists){
            return res.status(400).json({message: "This email is not exits try to register"});
        }

        // Step 3 : compare the password
        bcrypt.compare(password, exists.password, (err, result) => {
            if(err) console.log(err);
            else{
                if(result){
                    // we have do somthing
                    // token -> String -> JWT (JSON wet token);

                    // We have to generate 2 web tokens
                    // 1 : access token - > less expire time
                    // 2 : refresh tohen -> high 

                    jwt.sign({username : exists.username,password: exists.email}, 'masai', (err,token)=>{
                        if(err) console.log(err);
                        else{
                            console.log(token);
                            return res.status(200).json({accessToken : token});
                        }
                    },
                    {expireIn : '1m'}
                )
                    
                }else{
                    return res.status(400).json({message : `Password not match`});
                }
            }
        });



    }catch(err){
        console.log(err);
    }
})


module.exports = login;