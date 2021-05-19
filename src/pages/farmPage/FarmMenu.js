import React from "react";
import {Link, Redirect} from "react-router-dom";
import {useCookies} from "react-cookie";

const FarmMenu = () => {
    const [cookies, setCookies] = useCookies("user");

    const logout = () => {
        setCookies("user", "no-user", {path: '/'})
        window.location.href = "/";
    }


    return <div className="farmPage__menuContainer">
        <div className="farmPage__menu">
            <Link to={"/farm/costs"}>
                <div className="farmPage__menuItem">
                    <p>Expenses</p>
                </div>
            </Link>

            <Link to={'/farm/incomes'}>
                <div className="farmPage__menuItem">
                    <p>Incomes</p>
                </div>
            </Link>

            <div className="farmPage__menuItem">
                <p>Animals</p>
            </div>
            <Link to={'/farm/orders'}>
                <div className="farmPage__menuItem">
                    <p>Orders</p>
                </div>
            </Link>
            <Link to={"/market"}>
                <div className="farmPage__menuItem">
                    <p>Market</p>
                </div>
            </Link>
            <Link to={"/farm/settings"}>
                <div className="farmPage__menuItem">
                    <p>Settings</p>
                </div>
            </Link>

            <div className="farmPage__menuItem">
                <p onClick={e => {
                    logout()
                }}>Logout </p>
            </div>
        </div>
    </div>
}
export default FarmMenu
