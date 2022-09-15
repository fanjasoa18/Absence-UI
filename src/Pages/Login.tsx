import React, { useState } from "react";
import pic2 from '../Images/pic2.jpg';
import '../Styles/Login.css';
import SignIn from "../Components/SignIn";
import { Bg } from "../Components/Bg";

function Login() {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");


    return (
        <>
            <Bg style={{ background: "rgb(68, 213, 232)" }} />
            <div className="container">
                <div className="title">
                    <h2>Missing Management</h2>
                </div>
                <div className="log">
                    <img src={pic2} alt="" ></img>
                    <div className="content">
                        <div>
                            <h1>IDENTIFIER</h1>
                            <input value={identifier} type="id" placeholder="Login" onChange={(e) => (setIdentifier(e.target.value))} />
                        </div>
                        <div>
                            <h1>PASSWORD</h1>
                            <input value={password} type="password" placeholder="Password" onChange={(e) => (setPassword(e.target.value))} />
                        </div>

                        <div>
                            <SignIn identifier={identifier} password={password} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;