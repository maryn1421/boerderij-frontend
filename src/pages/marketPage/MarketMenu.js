import React from "react";
import './market.css'


const MarketMenu = () => {

    return <div className="marketMenu main">
        <div className="marketMenu__menu">
            <div className="marketMenu__menuItem">
                <a href="/market/new">Hirdetés feladása</a>
            </div>
            <div className="marketMenu__menuItem">
                <a href="/market">Ősszes hirdetées</a>
            </div>
            <div className="marketMenu__menuItem">
                <a href="/market/search">Keresés</a>
            </div>
            <div className="marketMenu__menuItem">
                <a href="/farm">Farm</a>
            </div>
        </div>
    </div>
}


export default MarketMenu;