const mongoose = require('mongoose')

const menuSchema = require({
    meal:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
},
{
    timestamps:true,
})
module.exports = mongoose.model('Menu',menuSchema)