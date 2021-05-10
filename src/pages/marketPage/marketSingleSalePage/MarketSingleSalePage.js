import React from "react";
import { useParams } from "react-router-dom";
import './SingleSale.css'

const MarketSingleSalePage = (props) => {
    let { id } = useParams();

    return <div className="marketSingleSalePage__main">
        <h1>{id}</h1>
    </div>
}


export default MarketSingleSalePage;