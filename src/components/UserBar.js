import React,{useState} from "react"
import Login from'./Logout';
import Logout from './Login';
import Register from './Register';

export default function UserBar(){

    var isLoggedIn = true;
    const [user, setUser] = useState("");

    if (user) {
      return <Logout user={user} setUser={setUser} />;
    } else {
      return (
        <React.Fragment>
          <Login setUser={setUser} />
          <Register setUser={setUser} />
        </React.Fragment>
      );
    }
}
    //the UserBar component provides a setUser function,
    // which can be used in the Login, Register,
    // and Logout components to set or unset the user value.