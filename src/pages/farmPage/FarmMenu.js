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
                    <p>Kiadások</p>
                </div>
            </Link>

            <Link to={'/farm/incomes'}>
                <div className="farmPage__menuItem">
                    <p>Bevételek</p>
                </div>
            </Link>

            <div className="farmPage__menuItem">
                <p>Állatok</p>
            </div>
            <Link to={'/farm/orders'}>
                <div className="farmPage__menuItem">
                    <p>Rendelések</p>
                </div>
            </Link>
            <Link to={"/market"}>
                <div className="farmPage__menuItem">
                    <p>Piac</p>
                </div>
            </Link>
            <Link to={"/farm/settings"}>
                <div className="farmPage__menuItem">
                    <p>Beállítások</p>
                </div>
            </Link>

            <div className="farmPage__menuItem">
                <p onClick={e => {
                    logout()
                }}>Kijelentkezés </p>
            </div>
        </div>
    </div>
}
export default FarmMenu