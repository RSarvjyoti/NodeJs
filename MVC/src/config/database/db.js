const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DB_URL

const connectDb = mongoose.connect(DB_URL);


module.exports = connectDb;