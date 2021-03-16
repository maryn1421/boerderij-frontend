import React from "react";
import FarmMenu from "../FarmMenu";


const FarmOrderPage = () => {
    document.body.style.backgroundImage = "url('/images/farm-image.jpg')";

    return <div className="farmPage__main">
        <FarmMenu/>
    </div>
}

export default FarmOrderPage;