import React, {useState} from 'react'


export default function () {

    const [fullName, setFullName] = useState({
        email: "",
        password: ""
    })
 




    return (
        <div>
            <h1>Please enter your details to sign in</h1>
            Email: <input onChange={(evt)=>{setFullName.email(evt.target.value)}} type="email" placeholder="email" value ={fullName.email}></input>
            Password: <input onChange={(evt)=>{setFullName.password(evt.target.value)}} type="text" placeholder="password" value ={fullName.password}></input>
            <button type="submit">sign in</button>
        </div>
    )
}
