import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_BASE_URL} from "../../constants";
import MarketMenu from "./MarketMenu";
import './market.css'
import MarketFilter from "./MarketFilter";
import SingleSale from "./SingleSale";


const MarketPage = () => {
    const [sales, setSales] = useState([])


    useEffect(() => {
        fetchAllActiveSales().then(data => {
            setSales(data)
        })
    }, [])

    console.log(sales)

    const fetchAllActiveSales = async () => {
        try {
            const response = await axios.get(API_BASE_URL + "/market/all-active")
            return response.data
        } catch (e) {
            console.log(e)
        }
    }

    const getLinkToSingleSale = (id) => {
        return "/market/sale/" + id;
    }

    return <div className="market__back">
        <div className="marketPage__main">
            <h1>PIAC - DE BOERDERIJ</h1>
            <MarketMenu/>
            <MarketFilter/>
            <div className="sales__container">
                {sales.map(sale => (
                    <a href={getLinkToSingleSale(sale.id)}> <SingleSale data={sale} key={sale.id}/></a>
                ))}

            </div>
        </div>
    </div>
}


export default MarketPage;