import React from "react";
import './register.css'
import axios from "axios";
import {API_BASE_URL} from "../../constants";
import Alert from '../alert/alert'



const Register = () => {
    document.body.style.backgroundImage = "url('/images/register-background.jpg')";


    const handleSubmit = (e) => {
        e.preventDefault()
        const password1 = document.getElementById("password1").value
        const password2 = document.getElementById("password2").value
        const email = document.getElementById("email").value
        const name = document.getElementById("name").value


        if (password1 === password2) {
            const data = {
                email: email,
                name: name,
                password: password1
            }

            submitRegistration(data).then(res => {
                if (res === undefined) {
                    new Alert("error", "Registration failed, this email address is already in use.").showAlert();
                }
                else {
                    new Alert("success", "Registration successful, Log in!").showAlert();
                }
            });
        } else {
           new Alert("error", "The given passwords must match!").showAlert();
        }
    }

    const submitRegistration = async (data) => {
        try {
                const resp = await axios.post(API_BASE_URL + "/auth/signup", data)
                return resp.data
        }
        catch (e) {
            new Alert("error", "Server error, try again later!").showAlert();
        }
    }

    return <div className="register__main">
        <div className="register__container">
            <form onSubmit={handleSubmit} >
                <div className="form-item">
                    <input type="text" name="name" id={"name"}
                           className="form-control" placeholder="Name"
                           required/>
                </div>  <div className="form-item">
                <input type="email" name="email" id={"email"}
                       className="form-control" placeholder="Email"
                       required/>
            </div>
                <div className="form-item">
                    <input type="password" name="password" id={"password1"}
                           className="form-control" placeholder="Password"
                           required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password"
                           id={"password2"}
                           className="form-control" placeholder="Password"
                           required/>
                </div>
                <button type={"submit"}>Registration</button> <br/>
            </form>
            <button onClick={e => window.location.href = "/login"}>Jump to login</button>

        </div>

    </div>
}

export default Register
