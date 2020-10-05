import React, {useState} from 'react'


export default function Login({setUser}) {

    const [fullName, setFullName] = useState({
        email: "",
        password: ""
    })

    function handleClick(e){
        setUser(fullName)
        e.preventDefault();
    }

    return (
        <div>
            <h1>Please enter your details to sign in</h1>
            Email: <input onChange={(evt)=>{setFullName.email(evt.target.value)}} type="email" placeholder="email" value ={fullName.email}></input>
            Password: <input onChange={(evt)=>{setFullName.password(evt.target.value)}} type="text" placeholder="password" value ={fullName.password}></input>
            <button onClick={handleClick} type="submit" value="Login" disable={fullName.length === 0}>sign in</button>
        {/* //we can disable the Login button when the username value is empty */}
        </div>
    )
}
