// import jwt
const jwt =require("jsonwebtoken")
// import model
const User = require("../models/User")
// secret or key
require("dotenv").config({path:'./config/.env'})

const isAuth = async(req,res,next)=>{
    try {
        const token =req.headers['x-auth-token']
        //check for token
        if(!token){
            return res.status(400).send({msg:"no token unauthorized"})
        }
        const decoded = await jwt.verify(token,process.env.secretOrKey)
         // Get User by ID from payload
         const user = await User.findById(decoded.id)
         //check if user?
         if(!user){
             return res.status(400).send({msg:"unauthorized"})
         }
         //Get user
         req.user = user
         next()
    } catch (error) {
        return res.status(400).send({msg:"Token is not Valid"})
    }
}
module.exports = isAuth