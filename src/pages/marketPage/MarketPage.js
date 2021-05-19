import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_BASE_URL} from "../../constants";
import MarketMenu from "./MarketMenu";
import './market.css'
import SingleSale from "./SingleSale";
import Alert from "../../components/alert/alert";


const MarketPage = () => {
    const [sales, setSales] = useState([])
    const [currentTypeSelect, setCurrentTypeSelect] = useState("all")
    const [currentProvinceSelect, setCurrentProvinceSelect] = useState("all")
    const [currentOrderSelect, setCurrentOrderSelect] = useState("asc")


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


    const fetchFilteredSales = async (province, type, order) => {
        try {
            let url = `${API_BASE_URL}/market/filter/${province}/${type}/${order}`;
            console.log(url)
            const resp = await axios.get(url)
            return resp.data;
        }
        catch (e) {
            console.log(e)
        }
    }

    const handleTypeChange = (e) => {
        setCurrentTypeSelect(e.target.value)
        fetchFilteredSales(currentProvinceSelect, e.target.value, currentOrderSelect).then(response => {
            if (response !== undefined) {
                setSales(response)
            }
            else {
                new Alert("error", "Error!")
            }
        })
    }


    const handleProvinceChange = (e) => {
        setCurrentProvinceSelect(e.target.value)
        fetchFilteredSales(e.target.value, currentTypeSelect, currentOrderSelect).then(response => {
            if (response !== undefined) {
                setSales(response)
            }
            else {
                new Alert("error", "Error!")
            }
        })
    }


    const handleOrderChange = (e) => {
        setCurrentOrderSelect(e.target.value)
        fetchFilteredSales(currentProvinceSelect, currentTypeSelect, e.target.value).then(response => {
            if (response !== undefined) {
                setSales(response)
            }
            else {
                new Alert("error", "Error!")
            }
        })
    }

    const getLinkToSingleSale = (id) => {
        return "/market/sale/" + id;
    }

    return <div className="market__back">
        <div className="marketPage__main">
            <h1>MARKET - DE BOERDERIJ</h1>
            <MarketMenu/>
            <div className="market__filterContainer">
                <label>Type:</label>
                <select onChange={handleTypeChange} name="type" id="type">
                    <option value="all">All</option>
                    <option value="animal">Animal</option>
                    <option value="food">Forage</option>
                    <option value="product">Product</option>
                </select>

                <label>County:</label>
                <select onChange={handleProvinceChange} name="province" id="province">
                    <option value="all">All</option>
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

                <label >By price:</label>
                <select onChange={handleOrderChange} name="order" id="order">
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
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
