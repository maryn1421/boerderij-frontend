import React from "react";
import LoginForm from "./LoginForm";
import './login.css'
import {Link} from "react-router-dom";

const Login = () => {
    document.body.style.backgroundImage = "url('/images/farm-background.jpg')";
    return <div className="login-container">
            <div className="login-content">
                <h1 className="login-title">Login</h1>
                <LoginForm />
                <span className="signup-link">Are you new? <Link to={"/signup"}>Registration</Link></span>
            </div>
    </div>
}


export default Login
