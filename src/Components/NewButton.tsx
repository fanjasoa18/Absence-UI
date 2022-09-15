import React, {useState} from 'react';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function NewButton () {
    const navigate = useNavigate();
    const create = async () => { //AUTHORIZATION???
        await create().then(()=> {
            navigate("/presence")
        });
      };

      return(
        <>
          <div className="create" >
          <Link to='/'><button type="button"> Presence </button> </Link>
          </div>
        </>
      )
}
export default NewButton;