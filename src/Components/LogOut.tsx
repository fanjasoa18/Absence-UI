import React, {useContext} from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function LogOut () {
    const navigate = useNavigate();
    const signOut = () => { 
            navigate ("/login")
      };

      return(
        <>
          <div className="logOut" >
          <Link to='/'><button type="button"> Exit </button> </Link>
          </div>
        </>
      )
}
export default LogOut;