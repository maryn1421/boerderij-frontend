import React from "react";
import FarmMenu from "../FarmMenu";
import Income from "./Incomes";

const FarmIncomePage = () => {
    document.body.style.backgroundImage = "url('/images/farm-image.jpg')";

    return <div className="farmPage__main">
        <FarmMenu/>
        <Income/>
    </div>
}

export default FarmIncomePage;