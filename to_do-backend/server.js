//Packages
const express = require('express');
const cors = require('cors');
const taskRouter=require('./routes/taskRoutes')
const {connectDB} = require('./config/db')

//Environmental variables
require('dotenv').config() 

// Database connection Function
connectDB() 

const app = express();

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


//Defining port
const port = process.env.PORT; 

//Task Routes
app.use('/api',taskRouter)

//Running of Server
app.listen(port, () => {
    console.log(`Server is listening to the ${port}`)
})