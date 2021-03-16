import React, {useEffect, useState} from "react";
import OrderLister from "./OrderLister";
import {useCookies} from "react-cookie";
import axios from "axios";
import {API_BASE_URL} from "../../../constants";
import authHeader from "../../../security/auth-header";

const Orders = () => {
    const [cookies, setCookies] = useCookies("user");
    const [orders, setOrders] = useState([])

    useEffect(()=> {
        fetchData().then(resp => {
            setOrders(resp)
        })
    }, [])


    const fetchData = async () => {
        try {
            const resp = await axios.get(API_BASE_URL + "/order/" + cookies.user.id + "/orders/14", {headers: authHeader(cookies.user)})
            return resp.data
        }
        catch (e) {
            console.log(e)
        }
    }

    if (orders.orderDayList) {
        return <div className="orders__main">
            <h4>Rendelések:</h4>
                <OrderLister data={orders} />
        </div>
    }


    return <div className="orders__main">
            <h1>LOADING</h1>
    </div>
}



export default Orders;