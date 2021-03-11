import React from "react";
import FarmMenu from "../FarmMenu";
import Costs from "./Costs";



const FarmCostPAge = () => {
    document.body.style.backgroundImage = "url('/images/farm-image.jpg')";

    return <div className="farmPage__main">
        <FarmMenu/>
        <Costs />
    </div>
}

export default FarmCostPAge;