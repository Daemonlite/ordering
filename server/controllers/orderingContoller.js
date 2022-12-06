const asyncHandler = require('express-async-handler')
const Ordering = require('../models/orderingModel')


const getOrders = asyncHandler(async (req,res)=>{
    const orders = await Ordering.find({Ordering:Ordering})
    res.status(200).json(orders)
})

const createOrders = asyncHandler(async (req,res)=>{
    const {fullName,address,phone,email,mealType,quantity,} = req.body
  

    if(!fullName){return res.status(400).send('Your full name is required')}
    if(!address){return res.status(400).send('address required')}
    if(!phone){return res.status(400).send('phone number required')}
    if(!email){return res.status(400).send('email required')}
    if(!mealType){return res.status(400).send('choose the type of meal you want')}
    if(!quantity){return res.status(400).send('specify the quantity you want')}

    

   
    const order = new Ordering({fullName,address,phone,email,mealType,quantity,})

    if(order){
        res.status(200).send('order placed successfully')
    }else{
        res.status(400).send('order failed')
    }

    try {
        await order.save()
    } catch (error) {
        console.log(error) 
    }
})

const updateOrder = asyncHandler(async (req,res)=>{
    const upOrder = new Ordering({
        _id: req.params.id,
        fullName:req.body.fullName,
        address:req.body.address,
        phone:req.body.phone,
        email:req.body.email,
        mealType:req.body.mealType,
        quantity:req.body.quantity,
        
      });
      Ordering.findByIdAndUpdate({_id: req.params.id},  upOrder).then(
        () => {
          res.status(201).json({
            message: 'Order updated successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
})

const deleteOrder = asyncHandler( async (req,res) => {
    Ordering.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  
  } )

module.exports = {
    getOrders,
    createOrders,
    updateOrder,
    deleteOrder,

}