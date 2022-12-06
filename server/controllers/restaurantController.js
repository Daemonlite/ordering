const asyncHandler = require('express-async-handler')
const multer = require('multer')
const Restaurant= require('../models/restaurantsModel')

const getRestaurants= asyncHandler( async (req,res)=>{
    const restaurants = await Restaurant.find({restaurant:Restaurant})
    res.status(200).json(restaurants)
  })


const addRestaurant = asyncHandler(async (req,res)=>{
    const {companyName,description,address,takeOut,delivery,deliveryPrice,deliveryLocations} = req.body
    if(!profile){return res.status(400).send('profile required')}
    if(!companyName){return res.status(400).send('company name required')}
    if(!description){return res.status(400).send('description is  required')}
    if(!address){return res.status(400).send('address required')}
    if(!takeOut){return res.status(400).send('takeout option  required')}
    if(!delivery){return res.status(400).send('delivery option required')}
    if(!deliveryPrice){return res.status(400).send('price of delivery  required')}
    if(!deliveryLocations){return res.status(400).send('delivery locations are  required')}

    const restaurant = new Restaurant({companyName,description,address,takeOut,delivery,deliveryPrice,deliveryLocations})

    if(restaurant){
        res.status(200).json('Restaurant added successfully')
       }
       else{
        res.status(400).json('bad not created')
       }

       try{
        await restaurant.save()
     
      
         } catch(err){
          console.log('failed=>',err)
          return res.status(400).send('error try again')
         }  


      
        
})

const updateRestaurant = asyncHandler(  async (req,res,next)=>{
    const upRestaurant = new Restaurant({
      _id: req.params.id,
      companyName:req.body.companyName,
      description:req.body.description,
      address:req.body.address,
      takeOut:req.body.takeOut,
      delivery:req.body.delivery,
      deliveryPrice:req.body.deliveryPrice,
      deliveryLocations:req.body.deliveryLocations,
    });
   Restaurant.findByIdAndUpdate({_id: req.params.id},  upRestaurant).then(
      () => {
        res.status(201).json({
          message: 'Resataurant updated successfully!'
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

  const deleteRestaurant = asyncHandler( async (req,res) => {
    Restaurant.deleteOne({_id: req.params.id}).then(
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
    getRestaurants,
    addRestaurant,
    updateRestaurant,
    deleteRestaurant,
}