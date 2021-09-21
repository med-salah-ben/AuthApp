import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
 const user = useSelector(state => state.authReducer.user)
//  if(!user){
//    return  <h1>spinner...</h1>
//  }
//     return (<div>
//         <h1> {user.name} </h1>
//     </div>
return(
    <div>
        {!user ?(
            <h1>spinner....</h1>
        ):
        (
        <div>
           <h2> {user.name}</h2>
           <h2> {user.lastName}</h2>
           <h2> {user.email}</h2>
        </div>)}
    </div>
    )
}

export default Dashboard
