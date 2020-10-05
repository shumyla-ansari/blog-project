import React from 'react'
import '../App.css'

export default function Register() {
    return (
        <div>
             <form className="register">
                <h1>Please Enter your details:</h1>
                <input type="text" value="" placeholder="First Name">
                </input>
                <input type="text" value="" placeholder="Last Name"></input>
                <input type="email" value="" placeholder="email"></input>
                <input type="text" value="" placeholder="Password"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
