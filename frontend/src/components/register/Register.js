import React from "react";
import './register.css'

const Register = () => {

    document.body.style.backgroundImage = "url('/images/register-background.jpg')";



    return <div className="register__main">
        <div className="register__container">
            <form >
                <div className="form-item">
                    <input type="text" name="name"
                           className="form-control" placeholder="név"
                           required/>
                </div>  <div className="form-item">
                <input type="email" name="email"
                       className="form-control" placeholder="email"
                       required/>
            </div>
                <div className="form-item">
                    <input type="password" name="password"
                           className="form-control" placeholder="jelszó"
                           required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password"
                           className="form-control" placeholder="jelszó"
                           required/>
                </div>
                <button>Regisztráció</button> <br/>
                <button>Ugrás a belépésre</button>
            </form>
        </div>

    </div>
}

export default Register