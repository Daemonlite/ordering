const express = require('express')
const router= express.Router()
const {getOrders,createOrders,updateOrder,deleteOrder} = require('../controllers/orderingContoller')

router.get('/',getOrders)
router.post('/',createOrders)
router.put('/:id',updateOrder)
router.delete('/:id',deleteOrder)


module.exports = router