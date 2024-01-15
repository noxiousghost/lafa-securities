const mongoose = require('mongoose');
require('dotenv').config()
const connection = async()=>{
try {
    const isConnected = await mongoose.connect(process.env.DB_URL)
    if(isConnected){
        console.log("Database connected successful")
    }
        
    
} catch (err) {
    console.log("Database connection error")
    console.log(err)
}
}

module.exports = connection