const {Schema, model } = require('mongoose');

const todoSchema = new Schema({
    title : {type : String, required : true},
    desc : {type : String},
    status : {type : Boolean, enum : ["false", "true"], default : "false"}
})

const todoModel = model('todos', todoSchema);

module.exports = todoModel;