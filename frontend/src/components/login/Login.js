import React from "react";
import SocialLogin from "./SocialLogin";
import LoginForm from "./LoginForm";
import './login.css'

const Login = () => {
    return <div className="login-container">
            <div className="login-content">
                <h1 className="login-title">Login to SpringSocial</h1>
                <SocialLogin />
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <LoginForm />
                <span className="signup-link">New user?</span>
            </div>
    </div>
}


export default Login