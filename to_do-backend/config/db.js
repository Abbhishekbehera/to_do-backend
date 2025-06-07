const mongoose=require('mongoose')
const task=require('../models/task')

require('dotenv').config()

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.URL)
        console.log("Connected to DB")
    }
    catch(e){
        console.log(e)
    }
    
}

module.exports = {connectDB};