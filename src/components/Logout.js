import React from 'react'
import UserBar from './UserBar'
import App from'./App'
import '../App.css'

export default function Logout({user, setUser}) {

    return (
        <div>
            <form onSubmit={(e => { e.preventDefault(); setUser('')})}>
           <h3>Logged in: <b>{user}</b></h3>
           <button type="submit">Logout</button>
           </form>
        </div>
    )
}
