import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_BASE_URL} from "../../constants";
import MarketMenu from "./MarketMenu";
import './market.css'


const MarketPage = () => {
    const [sales, setSales] = useState([])



    useEffect(() => {
        fetchAllActiveSales().then(data => {
            setSales(data)
        })
    },[])

    console.log(sales)

    const fetchAllActiveSales = async () => {
        try {
            const response = await  axios.get(API_BASE_URL + "/market/all-active")
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }

    return <div className="marketPage__main">
        <h1>PIAC - DE BOERDERIJ</h1>
        <MarketMenu />
    </div>
}


export default MarketPage;