const mongoose =require("mongoose")

require("dotenv").config({path:'./config/.env'})

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true,useUnifiedTopology:true})
        console.log("monogo DB connected")
    } catch (error) {
        console.log(`database failed to connected ${error}`)
    }
}
module.exports = connectDB ;