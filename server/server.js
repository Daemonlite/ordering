const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const path = require('path')
const connectDb = require('./config/database')
const cloudinary = require('cloudinary')



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
connectDb()



app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/restaurants/',require('./routes/restaurantRoutes'))
app.use('/api/orders',require('./routes/orderRoutes'))
app.listen(port, ()=>console.log(`server running on port ${port}`))
