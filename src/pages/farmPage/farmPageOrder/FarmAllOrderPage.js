import React from "react";
import FarmMenu from "../FarmMenu";
import AllOrder from "./AllOrder";


const FarmALLOrderPage = () => {

    document.body.style.backgroundImage = "url('/images/farm-image.jpg')";

    return <div className="farmPage__main">
        <FarmMenu/>
        <AllOrder/>
    </div>

}

export default FarmALLOrderPage;