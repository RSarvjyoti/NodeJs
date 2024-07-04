const { connect } = require('mongoose');

const connectDB = async (url) =>{
    await connect(url)
}

module.exports = connectDB;