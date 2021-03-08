import React from "react";
import SocialLogin from "./SocialLogin";
import LoginForm from "./LoginForm";
import './login.css'
import {Link} from "react-router-dom";

const Login = () => {
    document.body.style.backgroundImage = "url('/images/farm-background.jpg')";
    return <div className="login-container">
            <div className="login-content">
                <h1 className="login-title">Belépés</h1>
                <LoginForm />
                <span className="signup-link">Új vagy? <Link to={"/signup"}>Regisztráció</Link></span>
            </div>
    </div>
}


export default Login