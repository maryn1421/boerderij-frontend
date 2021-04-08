import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_BASE_URL} from "../../../constants";
import {useCookies} from "react-cookie";
import authHeader from "../../../security/auth-header";
import AllOrdersSingleOrder from "./AllOrdersSingleOrder";


const AllOrder = () => {
    const [orders, setOrders] = useState(null);
    const [cookies, setCookies] = useCookies("user");
    const [options, setOptions] = useState([])


    useEffect(() => {
        getIncomeOptions().then(response => {
            setOptions(response)
        })
    }, [])


    useEffect(() => {
        fetchAllOrderByUser().then(data => {
            setOrders(data)
        })
    }, [])


    const getIncomeOptions = async () => {
        try {
            const resp = await axios.get(API_BASE_URL + "/incomeOptions/" + cookies.user.id, {headers: authHeader(cookies.user)} )
            return resp.data
        }
        catch (e) {

        }
    }


    const fetchAllOrderByUser = async () => {
        try {
            const resp = await axios.get(API_BASE_URL + "/order/" + cookies.user.id + "/all", {headers: authHeader(cookies.user)})
            return resp.data;
        } catch (e) {
        }
    }


    const refresh = () => {
        fetchAllOrderByUser().then(data => {
            setOrders(data)
        })
    }


    const handleFilterChange = (e) => {
        console.log(e.target.value)
        if (e.target.value === "all") {
            fetchAllOrderByUser().then(data => {
                setOrders(data)
            })
        }
        else {
            getAllOrdersByOption(e.target.value).then(data => {
                setOrders(data)
            })
        }

    }


    const getAllOrdersByOption = async (optionId) => {
        try {
            const resp = await axios.get(API_BASE_URL + "/order/filter/" + optionId +"/" + cookies.user.id, {headers: authHeader(cookies.user)} )
            return resp.data
        }

        catch (e) {
            console.log(e)
        }
    }



    let content = <div className="loading"><h1>LOADING</h1></div>
    if (orders != null ) {
        content = <div className="allOrders__main">
            <div className="allOrders__backContainer"><a href="/farm/orders" className="backToOrdersButton">Vissza a rendelésekhez</a>
                <div className="allOrders__colorContainer">
                    <div className="allOrders__color">
                        <p><span className="green__color"> </span><span >Teljesített és fizetett</span></p>
                    </div>
                    <div className="allOrders__color">
                        <p><span className="red__color"> </span><span>Teljesített, de nem kifizetett</span></p>
                    </div>
                </div>
                <div className="orders__refreshButtonContainer"><button onClick={event => {refresh()}} className="refresh__button">↻</button></div>

            </div>
            <div className="allOrders__filterContainer">
                <div className="allOrders__filterContent">
                    <br/>
                    <h4>Rendelések szűrése</h4>
                    <select onChange={handleFilterChange} name="filter" id="filter">
                        <option value="all">Összes rendelés</option>
                        {options.map(option => (
                            <option value={option.id}>{option.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="allOrders__orderContainer">
                {orders.map(order => (
                    <AllOrdersSingleOrder data={order} key={order.id} />
                ))}
            </div>
        </div>
    }
    return content;


}


export default AllOrder