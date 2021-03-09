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

            submitRegistration(data).then(res => console.log(res));
        } else {
           new Alert("error", "A megadott jelszavaknak egyezniük kell!").showAlert();
        }


    }


    const submitRegistration = async (data) => {
        try {
                const resp = await axios.post(API_BASE_URL + "/auth/signup", data)
                return resp.data
        }
        catch (e) {
            console.log(e)
        }
    }










    return <div className="register__main">
        <div className="register__container">
            <form onSubmit={handleSubmit} >
                <div className="form-item">
                    <input type="text" name="name" id={"name"}
                           className="form-control" placeholder="név"
                           required/>
                </div>  <div className="form-item">
                <input type="email" name="email" id={"email"}
                       className="form-control" placeholder="email"
                       required/>
            </div>
                <div className="form-item">
                    <input type="password" name="password" id={"password1"}
                           className="form-control" placeholder="jelszó"
                           required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password"
                           id={"password2"}
                           className="form-control" placeholder="jelszó"
                           required/>
                </div>
                <button type={"submit"}>Regisztráció</button> <br/>
            </form>
            <button onClick={e => window.location.href = "/login"}>Ugrás a belépésre</button>

        </div>

    </div>
}

export default Register