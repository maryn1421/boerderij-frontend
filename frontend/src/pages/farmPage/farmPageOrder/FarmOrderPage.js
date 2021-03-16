import React from "react";
import FarmMenu from "../FarmMenu";
import Orders from "./Orders";
import './order.css'


const FarmOrderPage = () => {
    document.body.style.backgroundImage = "url('/images/farm-image.jpg')";

    return <div className="farmPage__main">
        <FarmMenu/>
        <Orders />
    </div>
}

export default FarmOrderPage;