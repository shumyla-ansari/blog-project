import React,{useState} from "react"
import Login from'./Login';
import Logout from './Logout';
import Register from './Register';

export default function UserBar(){

    var isLoggedIn = true;
const user = '';
if (user) {
    return <Logout user={user}/>
}
else {
    return(
        <React.Fragment>
            <Login />
            <Register/>
        </React.Fragment>
    )
}
}
    