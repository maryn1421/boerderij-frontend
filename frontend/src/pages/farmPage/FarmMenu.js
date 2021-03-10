import React from "react";
import {Link} from "react-router-dom";

const FarmMenu = () => {
    return   <div className="farmPage__menuContainer">
        <div className="farmPage__menu">

            <div className="farmPage__menuItem">
                <p>Kiadások</p>
            </div>
            <Link to={'/farm/incomes'}>
                <div className="farmPage__menuItem">
                    <p>Bevételek</p>
                </div>
            </Link>

            <div className="farmPage__menuItem">
                <p>Állatok</p>
            </div>
            <div className="farmPage__menuItem">
                <p>Rendelések</p>
            </div>
            <div className="farmPage__menuItem">
                <p>Piac</p>
            </div>
            <div className="farmPage__menuItem">
                <p>Beállítások</p>
            </div>
            <div className="farmPage__menuItem">
                <p>Kijelentkezés</p>
            </div>
        </div>
    </div>
}
export default FarmMenu