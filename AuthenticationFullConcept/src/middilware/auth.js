const jwt = require('jsonwebtoken');
const auth = (req, res, next) =>{
    console.log(req.headers);
    const header = req.headers.authorization;

    if(!header){
        return res.status(400).json({message : "Token is not provided!"});
    }

    const token  = header.split(" ")[1];

    // verify the token
    jwt.verify(token , "masai", (err, decoded) =>{
        if(err) console.log(err);
        else{
            req.user = decoded;
            next();
        }
    })



    console.log(token)
}

module.exports = auth;