import React, {useState, useContext} from 'react'
import { StateContext } from './context'


export default function Login() {

    const { dispatch } = useContext(StateContext)

    const [username, setUsername] = useState('')

    function handleChange(e){
        const value  = e.target.value;
        setUsername(value)
        

        }

    function handleClick(e){
        dispatch({type: 'LOGIN', username});
        e.preventDefault();
    }

    return (
        <div>
            <h1>Please enter your details to sign in</h1>
            Username: <input onChange={handleChange} name="username" type="text" placeholder="username" value ={username}></input>
            Password: <input name="password" type="text" placeholder="password"></input>
            <button onClick={handleClick} type="submit" value="Login" disable={username.length === 0}>sign in</button>
        {/* //we can disable the Login button when the username value is empty */}
        </div>
    )
}
