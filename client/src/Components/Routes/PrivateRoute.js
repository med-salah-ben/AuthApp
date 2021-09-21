import React from 'react'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NotAuth from '../Pages/NotAuth'


const PrivateRoute = ({ component : Component , ...rest}) => {
const isAuth = useSelector((state) => state.authReducer.isAuth)
 if(isAuth===true){
    return <Route component={Component} {...rest}  />
 }
 return <NotAuth />
}

export default PrivateRoute
