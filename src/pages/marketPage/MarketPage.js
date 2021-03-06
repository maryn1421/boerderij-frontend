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
                new Alert("error", "Hiba!")
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
                new Alert("error", "Hiba!")
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
                new Alert("error", "Hiba!")
            }
        })
    }

    const getLinkToSingleSale = (id) => {
        return "/market/sale/" + id;
    }

    return <div className="market__back">
        <div className="marketPage__main">
            <h1>PIAC - DE BOERDERIJ</h1>
            <MarketMenu/>
            <div className="market__filterContainer">
                <label>T??pus:</label>
                <select onChange={handleTypeChange} name="type" id="type">
                    <option value="all">??sszes</option>
                    <option value="animal">??llat</option>
                    <option value="food">Takarm??ny</option>
                    <option value="product">Term??k</option>
                </select>

                <label>Megye:</label>
                <select onChange={handleProvinceChange} name="province" id="province">
                    <option value="all">??sszes</option>
                    <option value="B??cs-kiskun">B??cs-kiskun</option>
                    <option value="Baranya">Baranya</option>
                    <option value="B??k??s">B??k??s</option>
                    <option value="Borsod-Aba??j-Zempl??n">Borsod-Aba??j-Zempl??n</option>
                    <option value="Budapest">Budapest</option>
                    <option value="Csongr??d">Csongr??d</option>
                    <option value="Fej??r">Fej??r</option>
                    <option value="Gy??r-Moson-Sopron">Gy??r-Moson-Sopron</option>
                    <option value="Hajd??-Bihar">Hajd??-Bihar</option>
                    <option value="Heves">Heves</option>
                    <option value="J??sz-Nagykun-Szolnok">J??sz-Nagykun-Szolnok</option>
                    <option value="Kom??rom-Esztergom">Kom??rom-Esztergom</option>
                    <option value="N??gr??d">N??gr??d</option>
                    <option value="Pest">Pest</option>
                    <option value="Somogy">Somogy</option>
                    <option value="Szabolcs-Szatm??r-Bereg">Szabolcs-Szatm??r-Bereg</option>
                    <option value="Tolna">Tolna</option>
                    <option value="Vas">Vas</option>
                    <option value="Veszpr??m">Veszpr??m</option>
                    <option value="Zala">Zala</option>
                </select>

                <label >??r szerint:</label>
                <select onChange={handleOrderChange} name="order" id="order">
                    <option value="asc">N??vekv??</option>
                    <option value="desc">Cs??kken??</option>
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