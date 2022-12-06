const mongoose = require('mongoose')

const orderingSchema = mongoose.Schema({
    fullName :{
        type:String,
        required:true,
    },
    address :{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
      
    },
    email:{
        type:String,
        required:true,
    
    },
 
    mealType:{
     type:String,
     required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },

},
{
    timestamps:true,
})

module.exports = mongoose.model('Ordering',orderingSchema)