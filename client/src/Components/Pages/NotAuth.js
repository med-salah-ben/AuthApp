import React from 'react'
import { Link } from 'react-router-dom'

const NotAuth = () => {
    return (
        <div>
            <h1>Login to get Private Route</h1>
            <Link to="/">Back to home page</Link>
        </div>
    )
}

export default NotAuth
