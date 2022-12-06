const mongoose = require('mongoose')

const dispatchSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    licenseId:{
        type:Number,
        required:true,
        unique:true,
    },
    vehicleType:{
        type:String,
        required:true,
    },
    vehicleRegistration:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})
module.exports = mongoose.model('Dispatch',dispatchSchema)