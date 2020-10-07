import React, { useContext } from 'react'
import {StateContext} from'./context'
//import UserBar from './UserBar'
//import App from'./App'
import '../App.css'

export default function Logout() {
    const { state, dispatch }= useContext(StateContext)
    const { user } = state


    return (
        <div>
            <form onSubmit={(e => { e.preventDefault(); dispatch({type: 'LOGOUT'})})}>
           <h3>Logged in: <b>{user}</b></h3>
           <button type="submit">Logout</button>
           </form>
        </div>
    )
}
