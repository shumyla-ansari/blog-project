import React from "react"
import Logout from'./Logout';
import Login from './Login';
import Register from './Register';
//import App from './App'

export default function UserBar({user, dispatch}){

    if (user) {
      return <Logout user={user} dispatch={dispatch} />;
    } else {
      return (
        <React.Fragment>
          <Login dispatch={dispatch} />
          <Register dispatch={dispatch} />
        </React.Fragment>
      );
    }
}
    //the UserBar component provides a setUser function,
    // which can be used in the Login, Register,
    // and Logout components to set or unset the user value.