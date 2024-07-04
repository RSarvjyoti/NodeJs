const { Router } = require("express");
const dashboard = Router();
const jwt = require('jsonwebtoken');

// const middilware = async (req, res, next) =>{
//     const { email, password } = req.body;
//     const isValid =  await userModel.findOne({});

//     if(isValid){
//         next();
//     }else{
//         res.send('Login failed invailid credentials');
//     }
// }

dashboard.get('/' , (req, res) =>{
    
 // 1 way   // if(Number(req.query.token) === 1987){
    //     res.send('Dashboard');
    // }else{
    //     res.send('Please loging again!');
    // }

    let token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, 'secret', function(err, decoded) {
        console.log(decoded.foo) 
        if(err){
            res.send("Please login");
        }else{
            res.send("Dashboard data!");
        }
    });
      

   
})

module.exports = { dashboard};