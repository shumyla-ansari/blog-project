import React,{ useState } from 'react'
import UserBar from "./UserBar"
import '../App.css'

export default function Register(props) {

    const[ username, setUsername] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirmPassword: ""

    });

    function handleChange(e){
        const {name, value} = e.target;

        setUsername(prevValue => {
            return(
                {
                    ...prevValue,
                    [name]: value
                }
            )
        })

    }

    function handleClick(props, e){
        props.userName(username)
        e.preventDefault();

    }


    return (
        <div>
             <form className="register">
                <h1>Please Enter your details:</h1>
                <input onChange={handleChange} type="text" name="fname" value={username.fname} placeholder="First Name"></input>
                <input onChange={handleChange} type="text" name="lname"value={username.lname}  placeholder="Last Name"></input>
                <input onChange={handleChange} type="email" name="email" value={username.email}  placeholder="email"></input>
                <input onChange={handleChange} type="text" name="password" value={username.password}  placeholder="Password"></input>
                <input onChange={handleChange} type="text" name="confirmPassword "value={username.confirmPassword}  placeholder="Confirm Password"></input>
                <button onClick={handleClick} type="submit" value="Register" disable={username.fname.legth === 0 || username.password.length === 0 || username.password !== username.confirmPassword}>Submit</button>
            </form>
        </div>
    )
}
