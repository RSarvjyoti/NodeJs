const { Schema, model } = require('mongoose');

const blackListSchema = new Schema({
    token : { type : String, required : true }
})

const logoutModel = model('blackList', blackListSchema);

module.exports = logoutModel;