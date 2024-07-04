const {connect } = require('mongoose');

const connectDb = async (url) =>{
    try{
        await connect(url)
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDb;