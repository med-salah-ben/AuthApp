const Router = require('express').Router()
const User = require('../models/User')
require("dotenv").config({path:'./config/.env'})
//bcrypt
const bcrypt = require('bcrypt')
//JSON WEB Token
const jwt = require("jsonwebtoken")
//import isAuth middleware
const isAuth = require("../middlewares/isAuth")

const {validator,registerRules,loginRules} =require("../middlewares/validator")

Router.post("/register",registerRules(),validator, async(req,res)=>{
    const {name,lastName,email,password}= req.body
    try {
        //simple validation changed with registerRules() and validator
        // if( !name || !lastName || !email || !password){
        //     return res.status(400).json({msg:"please enter all fields!"})
        // }
        //check for existing user
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({msg:"user already exists"})
        }
        //create new User
        user = new User({name, lastName, email, password});
        //create salt and hash
        const salt = 10 
        const hashedPassword  = await bcrypt.hash(password,salt)
        user.password  =  hashedPassword;

        //save user
        await user.save();

          //sign user
          const payload = {
            id:user._id
          }
        //Token
        const token = await jwt.sign(payload,process.env.secretOrKey, { expiresIn: 60 * 60 })
        
        res.status(200).send({msg:"User Register With Success ",user,token })

      

    } catch (error) {
        res.status(500).send({msg:"register server errors"})
    }
})
//login user
Router.post("/login",loginRules(),validator, async (req,res)=>{
    const {email,password}= req.body
    try {
             //simple validation changed with registerRules() and validator
        // if(  !email || !password){
        //     return res.status(400).json({msg:"please enter all fields!"})
        // }
        let  user = await User.findOne({email})
        if(!user){
            return res.status(400).send({msg : "User does not exist "})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).send({msg : "Bad Credentials password"})
        }
          //sign user
          const payload = {
            id:user._id,
        }
        //Token
        const token = await jwt.sign(payload,process.env.secretOrKey, { expiresIn: 60 * 60 })

        res.send({msg:"logged with success",user,token})
    } catch (error) {
        res.status(500).send({msg:"login server errors"})
    }
   
})
//private routes
Router.get("/user",isAuth,(req,res)=>{
    res.status(200).send({user:req.user})
})

module.exports = Router