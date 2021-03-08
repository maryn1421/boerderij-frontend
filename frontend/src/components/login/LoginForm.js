import React from "react";
import './login.css'


const LoginForm = () => {
   return  <form>
        <div className="form-item">
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
            <button type="submit" className="btn btn-block btn-primary">Login</button>
        </div>
    </form>
}


export default LoginForm