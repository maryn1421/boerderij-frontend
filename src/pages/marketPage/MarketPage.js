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
            <div className="market__filterContainer">
                <label>Típus:</label>
                <select name="type" id="type">
                    <option value="all">Összes</option>
                    <option value="ANIMAL">Állat</option>
                    <option value="FOOD">Takarmány</option>
                    <option value="PRODUCT">Termék</option>
                </select>

                <label>Megye:</label>
                <select name="province" id="province">
                    <option value="all">Összes</option>
                    <option value="Bács-kiskun">Bács-kiskun</option>
                    <option value="Baranya">Baranya</option>
                    <option value="Békés">Békés</option>
                    <option value="Borsod-Abaúj-Zemplén">Borsod-Abaúj-Zemplén</option>
                    <option value="Budapest">Budapest</option>
                    <option value="Csongrád">Csongrád</option>
                    <option value="Fejér">Fejér</option>
                    <option value="Győr-Moson-Sopron">Győr-Moson-Sopron</option>
                    <option value="Hajdú-Bihar">Hajdú-Bihar</option>
                    <option value="Heves">Heves</option>
                    <option value="Jász-Nagykun-Szolnok">Jász-Nagykun-Szolnok</option>
                    <option value="Komárom-Esztergom">Komárom-Esztergom</option>
                    <option value="Nógrád">Nógrád</option>
                    <option value="Pest">Pest</option>
                    <option value="Somogy">Somogy</option>
                    <option value="Szabolcs-Szatmár-Bereg">Szabolcs-Szatmár-Bereg</option>
                    <option value="Tolna">Tolna</option>
                    <option value="Vas">Vas</option>
                    <option value="Veszprém">Veszprém</option>
                    <option value="Zala">Zala</option>
                </select>

                <label >Ár szerint:</label>
                <select name="order" id="order">
                    <option value="asc">Növekvő</option>
                    <option value="desc">Csökkenő</option>
                </select>

            </div>
            <div className="sales__container">
                {sales.map(sale => (
                    <a href={getLinkToSingleSale(sale.id)}> <SingleSale data={sale} key={sale.id}/></a>
                ))}

            </div>
        </div>
    </div>
}


export default MarketPage;