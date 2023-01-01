import React from "react";
import './Login.css'
import { LoginHeader } from "../Header/Header";
import { useNavigate } from "react-router-dom"
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from "react";
const API = 'http://localhost:9000/'


export default function Login() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({username: '', password: ''});
    const [hidden, setHidden] = useState(true);
    const [emailErr, setEmailErr] = useState('');
    const [passErr, setPassErr] = useState('');
    console.log(loginData);

    const handelsubmit = async (e) => {
        e.preventDefault();
        console.log("in handelsubmit");

        await fetch(`${API}login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
            .then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
                if(data.message === 'email/phone not exists') setEmailErr(data.message);
                else if (data.message === 'invalid password') setPassErr(data.message);
                else {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', data.user);
                    navigate('/posts')
                }
            })

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
                        <input type="text" placeholder="username"
                        value={loginData.username}
                        onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                        /> <br/>
                        <span style={{color: "red"}}>{emailErr}</span>
                    </div>
                    <div className="input">
                        <input type={hidden ? 'password' : 'text'} placeholder="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        /> 
                        <span className="hide-icon">
                            {hidden ? <FaEye onClick={() => setHidden(false)}/> 
                            : <FaEyeSlash onClick={() => setHidden(true)}/> }
                        </span> <br/>
                        <span style={{color: "red"}}>{passErr}</span>
                    </div>
                    <button type="submit">Login</button>
                    <p>Need to <span className="sign-up" onClick={() => navigate('/register')}>
                        SignUp
                        </span>
                    </p>
                </form>
            </div>
        </section>
        </>
    )
}

