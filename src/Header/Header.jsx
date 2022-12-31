import React from "react";
import './Header.css';


export function LoginHeader() {
    return (
        <>
        <section className="login-header">
            <div className="logo"><b>INSTACLONE</b></div>
            <div className="serach-box"></div>
            <div className="nav-box"></div>
        </section>
        </>
    )
}

export function MainHeader() {
    return (
        <>
        <section className="login-header">
            <div className="logo"></div>
            <div className="serach-box"></div>
            <div className="nav-box"></div>
        </section>
        </>
    )
}