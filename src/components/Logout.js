import React from 'react'
import UserBar from './UserBar'
import '../App.css'

export default function Logout(props) {

    return (
        <div>
            <form onSubmit={e => { e.preventDefault(); props.setUser('')}}>
           <h3>Logged in: {}</h3>
           <button type="submit">Logout</button>
           </form>
        </div>
    )
}
