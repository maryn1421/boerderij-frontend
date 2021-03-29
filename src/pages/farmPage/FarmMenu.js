import React from "react";
import {Link} from "react-router-dom";

const FarmMenu = () => {
    return   <div className="farmPage__menuContainer">
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
            <div className="farmPage__menuItem">
                <p>Piac</p>
            </div>
            <Link to={"/farm/settings"}>
                <div className="farmPage__menuItem">
                    <p>Beállítások</p>
                </div>
            </Link>

            <div className="farmPage__menuItem">
                <p>Kijelentkezés</p>
            </div>
        </div>
    </div>
}
export default FarmMenu