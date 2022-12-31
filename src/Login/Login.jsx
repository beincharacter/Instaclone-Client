import React from "react";
import './Login.css'
import { LoginHeader } from "../Header/Header";
import { useNavigate } from "react-router-dom"


export default function Login() {
    const navigate = useNavigate()

    const handelsubmit = (e) => {
        e.preventDefault();
        console.log("in handelsubmit");

    }

    return (
        <>
        <section className="login-container">
            <LoginHeader/>
            <div className="login-box border">
                <div className="signin-header ">
                    <p style={{fontSize: "1.1em", float: "left", marginLeft: "19px"}}>
                        Sign In :
                    </p>
                </div>

                <form className="input-box" onSubmit={(e) => handelsubmit(e)} >
                    <div className="input">
                        <input type="text" placeholder="username"/> <br/>
                        <span style={{color: "red"}}></span>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="password"/> <br/>
                        <span style={{color: "red"}}></span>
                    </div>
                    <button type="submit">Login</button>
                    <p>Need to <span className="sign-up" onClick={() => navigate('/register')}>SignUp</span></p>
                </form>
            </div>
        </section>
        </>
    )
}