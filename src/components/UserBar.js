import React, { useContext } from "react"
import Logout from'./Logout';
import Login from './Login';
import Register from './Register';
import { StateContext } from './context'
//import App from './App'

export default function UserBar(){

  const { state } = useContext(StateContext)
  const { user } = state

    if (user) {
      return <Logout />;
    } else {
      return (
        <React.Fragment>
          <Login  />
          <Register  />
        </React.Fragment>
      );
    }
}
    //the UserBar component provides a setUser function,
    // which can be used in the Login, Register,
    // and Logout components to set or unset the user value.