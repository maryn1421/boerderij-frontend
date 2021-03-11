import React from "react";
import './farmPage.css'
import FarmMenu from "./FarmMenu";

const FarmPage = () => {
    document.body.style.backgroundImage = "url('/images/farm-image.jpg')";


    return <div className="farmPage__main">
        <FarmMenu/>
    </div>
}

export default FarmPage