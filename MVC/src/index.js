const express = require('express');
const connectDb = require('./config/database/db');
const userRoute = require('./routes/userRoutes');

require('dotenv').config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 9090



app.get('/', (req, res) =>{
    res.send('This is a home page');
})

app.use('/users', userRoute);

app.listen(port, async ()=>{
    try{
        await connectDb
        console.log(`Database connected successfully!`);
        console.log(`Server is running a t port ${port}`);
    }catch(err){
        console.log(err)
    }
})