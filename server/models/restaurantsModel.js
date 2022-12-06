const mongoose = require('mongoose')


const restaurantSchema = mongoose.Schema({

    companyName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    takeOut:{
        type:String,
        required:true,
    },
    delivery:{
        type:String,
        required:true,
    },
    deliveryPrice:{
        type:String,
        required:true,
    },
    deliveryLocations:{
        type:String,
        required:true,
    },
},
{
    timestamps:true,
})

module.exports = mongoose.model('Restaurant',restaurantSchema)