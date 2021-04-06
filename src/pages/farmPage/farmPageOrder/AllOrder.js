import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_BASE_URL} from "../../../constants";
import {useCookies} from "react-cookie";
import authHeader from "../../../security/auth-header";
import AllOrdersSingleOrder from "./AllOrdersSingleOrder";


const AllOrder = () => {
    const [orders, setOrders] = useState(null);
    const [cookies, setCookies] = useCookies("user");


    useEffect(() => {
        fetchAllOrderByUser().then(data => {
            setOrders(data)
        })
    }, [])


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


    console.log(orders)

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