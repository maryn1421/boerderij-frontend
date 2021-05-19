import React from "react";
import Patch from "./Patch";
import './patch.css'


const PatchList = () => {
    let data = [
        {
            number: 1.2,
            description: "New Main Page was introduced to the site, also closing orders now moves to closed orders.",
            date: "2021.03.29"
        },
        {
            number: 1.1,
            description: "The site has been moved to this domain with 3 basic functions : monitorise expenses, incomes, orders.",
            date: "2021.03.18"
        }, {
            number: 1.0, description: "Creation of the page: ", date: "2021.03.08"
        }]


    return <div className="patchList__main">
        <div className="patchList__header">
            <h1>Upgrades</h1>

        </div>
        <div className="patchList__backContainer">
            <a className={"back__button"} href="/">Back to main page</a>
        </div>
        <div className="patch__container">
            {data.map(item => (
                <Patch data={item} key={item.number}/>
            ))}
        </div>
    </div>
}


export default PatchList;
