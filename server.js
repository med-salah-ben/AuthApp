const express = require('express')
const connectDB = require('./config/connectDB')
const authRouter = require("./routes/Auth")
const app = express()
connectDB()
//middleware
app.use(express.json())
//use routes
app.use("/api/auth", authRouter)
const PORT = process.env.PORT || 6000 ;

app.listen(PORT,(err)=>{
    err? console.log(err)
    :console.log(`server is running on port ${PORT}`)
})