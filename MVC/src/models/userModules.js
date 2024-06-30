const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    id : Number,
    full_name : String,
    age : Number,
    gender : String,
    balance : Number,
    native : String,
    relocate_to : String,
    family_members : Number
})

const usserModel = model('users', userSchema)

module.exports = usserModel;