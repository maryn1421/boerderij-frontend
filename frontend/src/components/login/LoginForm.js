import React from "react";
import './login.css'
import axios from "axios";
import {API_BASE_URL} from "../../constants";
import Alert from "../alert/alert";
import { useCookies } from "react-cookie";


const LoginForm = () => {
    const [cookies, setCookies] = useCookies("user")



    const submitLogin = (e) => {
        e.preventDefault();
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;

        const credentials = {
            password: password,
            email: email
        }
        login(credentials).then(res => {
            if (res !== undefined) {
                setCookies("user", res, {path: '/'})
                window.location.href = "/farm";
            }
            else {
                new Alert("error", "Sikertelen bejelentkezés!").showAlert()
            }
        })

    }


    const login = async (data) => {
        try {
            const resp = await axios.post(API_BASE_URL + "/auth/login", data)
            return resp.data
        }
        catch (e) {
            new Alert("error", "Szerver hiba a bejelentkezés során!")
        }
    }



   return  <form onSubmit={submitLogin}>
        <div className="form-item">
            <input type="email" name="email" id={"email"}
                   className="form-control" placeholder="Email"
                   required/>
        </div>
        <div className="form-item">
            <input type="password" name="password" id={"password"}
                   className="form-control" placeholder="Password"
                    required/>
        </div>
        <div className="form-item">
            <button type="submit" className="btn btn-block btn-primary">Login</button>
        </div>
    </form>
}


export default LoginForm