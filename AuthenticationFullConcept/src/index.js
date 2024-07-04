const express = require("express");
const connectDb = require("./config/db");
const register = require("./routes/register");
const login = require("./routes/login");
const todo = require("./routes/todoRoute");
const auth = require("./middilware/auth");
const logout = require("./routes/logout");

require('dotenv').config();

const port = process.env.PORT || 9080
const DB_URL = process.env.DB_URL

const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.send(`This is the Home page!`);
})

app.use('/register', register);
app.use('/login', login);

app.use('/todos',auth,  todo);

app.use('/logout', logout);

app.listen(port, async ()=>{
    try{
        await connectDb(DB_URL);
        console.log('Database connected successfully!');
        console.log(`Server is running at port no. ${port}`);
    }catch(err){
        console.log(err)
    }
})