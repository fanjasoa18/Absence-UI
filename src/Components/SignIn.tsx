/*import React, {useRef} from "react";
import { useNavigate } from "react-router";

type SigninType = {
  identifier: string;
  password: string;
}

function SignIn(props:SigninType) {
  const { identifier, password} = props; //AUTHORIZATION???
  const navigate = useNavigate();
        
  const handleSubmit = async () => {
    await (identifier, password)
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        console.error(error)
      })
      
  }

    return(
        <>
            <button type="button" className="connect" onClick={handleSubmit}>
                Connect
            </button>
        </>
    )
}

export default SignIn;*/