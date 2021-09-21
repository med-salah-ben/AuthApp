import {LOGIN_USER,
    USER_LOADING,
    LOGOUT_USER,
    REGISTER_USER,
    GET_AUTH_USER,
    AUTH_ERRORS}  from "../constant/Actions-types"

    const initialState ={
        token:localStorage.getItem('token'),
        user:null,
        isAuth:false,
        isLoading:false,
        msg:null
    }

    const authReducer = (state =initialState,{type,payload})=>{
        switch (type) {
            case USER_LOADING:
                return{
                    ...state,
                    isLoading:true
                }
            case AUTH_ERRORS:    
            case LOGOUT_USER:
                localStorage.removeItem('token')
                return{
                    ...state,
                    token:null,
                    user:null,
                    isAuth:false,
                    isLoading:false
                }    
            case REGISTER_USER:
            case LOGIN_USER:
                localStorage.setItem('token',payload.token)
                return{
                    ...state,
                    isLoading:false,
                    isAuth:true,
                    ...payload
                }
            case GET_AUTH_USER:
                return{
                    ...state,
                    isLoading:false,
                    isAuth:true,
                    ...payload
                }

            default:
                return state
        }
    }

    export default authReducer