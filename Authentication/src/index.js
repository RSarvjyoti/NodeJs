const express = require("express");
const connectDB = require("./config/database/db");
const signup = require("./controller/routes/signupRoute");
const loginRoute = require("./controller/routes/loginRoute");
const {dashboard} = require("./controller/routes/dashboardRoute");
require('dotenv').config();

const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

app.use('/signup', signup);
app.use('/login', loginRoute);
app.use('/dashboard', dashboard)

app.listen(PORT, async () => {
    try {
        await connectDB(DB_URL);
        console.log("connected to the Database");
        console.log(`server is running at port ${PORT}`);
    } catch (err) {
        console.log(err);
    }
});
