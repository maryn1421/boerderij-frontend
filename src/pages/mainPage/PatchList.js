import React from "react";
import Patch from "./Patch";
import './patch.css'


const PatchList = () => {
    let data = [
        {
            number: 1.2,
            description: "Új főoldal jelent meg a webhelyen, illetve rendelések lezárásánál a lezárt rendelés átkerül a bevételekhez",
            date: "2021.03.29"
        },
        {
            number: 1.1,
            description: "Az oldal átkerült erre a domainra, 3 alap funkcióval: bevételek, kiadások és rendelések monitorozása.",
            date: "2021.03.18"
        }, {
            number: 1.0, description: "Az oldal létrejötte", date: "2021.03.08"
        }]


    return <div className="patchList__main">
        <div className="patchList__header">
            <h1>Frissítések</h1>

        </div>
        <div className="patchList__backContainer">
            <a className={"back__button"} href="/"> Vissza a főoldalra</a>
        </div>
        <div className="patch__container">
            {data.map(item => (
                <Patch data={item} key={item.number}/>
            ))}
        </div>
    </div>
}


export default PatchList;