const mongoose = require('mongoose');
const Joi = require('joi')
const bcrypt = require('bcrypt')
const jwt  =  require('jsonwebtoken')
const config = require('config')
//Attributes of the Course object
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 255,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        maxlength: 1024,
        minlength: 3
    },
    isAdmin:{
        type:Boolean,
        require:true,
        default: true
    }
});
userSchema.methods.token = function(){
    const token=jwt.sign({name:this.name,id:this.id,email:this.email,isAdmin:this.isAdmin},config.get('key'))
    return token
}
const user = mongoose.model('User', userSchema);

function validateUser(user){
    const schema = {
        name:Joi.string().max(255).min(3).required(),
        email: Joi.string().max(255).min(3).required().email(),
        password:Joi.string().max(255).min(3).required(),
        isAdmin:Joi.required()
    }
    return Joi.validate(user,schema)
}
module.exports.User = user
module.exports.validate= validateUser