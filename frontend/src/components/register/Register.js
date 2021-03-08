import React from "react";

const Register = () => {
    return <div className="register__main">
        <form >
            <div className="form-item">
                <input type="text" name="name"
                       className="form-control" placeholder="name"
                       required/>
            </div>  <div className="form-item">
                <input type="email" name="email"
                       className="form-control" placeholder="Email"
                       required/>
            </div>
            <div className="form-item">
                <input type="password" name="password"
                       className="form-control" placeholder="Password"
                       required/>
            </div>
            <div className="form-item">
                <input type="password" name="password"
                       className="form-control" placeholder="Password"
                       required/>
            </div>
        </form>
    </div>
}

export default Register