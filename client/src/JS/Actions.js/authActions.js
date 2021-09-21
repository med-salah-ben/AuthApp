import axios from "axios"
import { Alert } from "react-bootstrap"

import {LOGIN_USER,
        USER_LOADING,
        LOGOUT_USER,
        REGISTER_USER,
        GET_AUTH_USER,
        AUTH_ERRORS}  from "../constant/Actions-types"
//loading user
export const userLoading = ()=>(dispatch)=>{
    dispatch({
        type:USER_LOADING
    })
}
//register user
export const registerUser = (formData) =>async(dispatch)=>{
    dispatch(userLoading())
    try {
        const res = await axios.post('/api/auth/register',formData)
        dispatch({
            type:REGISTER_USER,
            payload:res.data//{msg,user,token}
        })
    } catch (error) {
        console.log(error)
        dispatch({type:AUTH_ERRORS})
    }
}
//login
export const loginUser = (formData) =>async(dispatch)=>{
    dispatch(userLoading())
    try {
        const res = await axios.post('/api/auth/login',formData)
        dispatch({
            type:LOGIN_USER,
            payload:res.data//{msg,user,token}
        })
    } catch (error) {
        console.dir(error)  
        const {errors,msg}= error.response.data
        if(Array.isArray(errors)){
            errors.forEach((err)=>alert(err.msg))
        }
        if(msg){
           return <Alert variant="success"> err </Alert>
        }
        dispatch({type:AUTH_ERRORS})
    }
}

//get auth user
export const getAuthUser = ()=>async(dispatch)=>{
    dispatch(userLoading())
   try {
       //headers
       const config ={
           headers : {
               'x-auth-token':localStorage.getItem('token')
           }
       }
    const res = await axios.get('/api/auth/user',config)
    dispatch({
        type:GET_AUTH_USER,
        payload:res.data // {user:req.user}
    })
   } catch (error) {
    console.log(error)
    dispatch({type:AUTH_ERRORS})
   }
}

export const logoutUser = () => (dispatch) => {
    dispatch({
        type:LOGOUT_USER
    })
}