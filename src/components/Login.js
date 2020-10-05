import React from 'react'
import Logout from './Logout'
import '../App.css'

export default function Login(props) {
    const user = "Shumyla Ansari"
    return (
        <div>
           <h3>Logged in: {props.value}</h3>
           <button type="submit">Logout</button>

        </div>
    )
}
