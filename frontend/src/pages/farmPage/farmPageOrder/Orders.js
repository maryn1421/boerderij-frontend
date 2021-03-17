import React, {useEffect, useState} from "react";
import OrderLister from "./OrderLister";
import {useCookies} from "react-cookie";
import axios from "axios";
import {API_BASE_URL} from "../../../constants";
import authHeader from "../../../security/auth-header";

const Orders = () => {
    const [cookies, setCookies] = useCookies("user");
    const [orders, setOrders] = useState([])
    const [options, setOptions] = useState([])


    useEffect(() => {
        getCostOptions().then(response => {
            setOptions(response)
        })
    }, [])



    const getCostOptions = async () => {
        try {
            const resp = await axios.get(API_BASE_URL + "/incomeOptions/" + cookies.user.id, {headers: authHeader(cookies.user)} )
            return resp.data
        }
        catch (e) {

        }
    }


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

    const handleNewOrder= (e) => {
        e.preventDefault();
    }

    if (orders.orderDayList) {
        return <div className="orders__main">
            <div className="income__newIncome">
                <form onSubmit={handleNewOrder}>
                    <input id={"order__name"} required={"required"} placeholder={"rendelés neve"} type="text"/> <br/>
                    <select className={"income__select"} name="type" id="order__option">
                        {
                            options.map(option => (
                                <option value={option.id}>{option.name}</option>
                            ))
                        }

                    </select> <br/>
                    <input id={"order__price"} required={"required"} placeholder={"rendelés összege"} type="text"/> <br/>
                    <input id={"order__date"} required={"required"} type="date"/> <br/>
                    <button type={"submit"}>Hozzáadás</button>
                </form>
            </div>
            <h4>Rendelések:</h4>
                <OrderLister data={orders} />
        </div>
    }


    return <div className="orders__main">
            <h1>LOADING</h1>
    </div>
}



export default Orders;