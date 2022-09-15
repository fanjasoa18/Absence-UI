import React, {useContext} from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Accept () {
    const navigate = useNavigate();
    const yes = () => { 
            navigate ("/student")
      };

      return(
        <>
          <div className="accept" >
          <Link to='/student'><button type="button" className="yes"> Yes </button> </Link>
          </div>
        </>
      )
}
export default Accept;