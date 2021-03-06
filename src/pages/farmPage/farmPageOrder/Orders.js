import React, {useEffect, useState} from "react";
import OrderLister from "./OrderLister";
import {useCookies} from "react-cookie";
import axios from "axios";
import {API_BASE_URL} from "../../../constants";
import authHeader from "../../../security/auth-header";
import Alert from "../../../components/alert/alert";

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


    const refresh = () => {
        fetchData().then(resp => {
            setOrders(resp)
        })
    }

    const handleNewOrder= (e) => {
        e.preventDefault();
        const name = document.getElementById("order__name").value;
        const type = document.getElementById("order__option").value;
        const price = document.getElementById("order__price").value;
        const date = document.getElementById("order__date").value;


        const data = {
            name,
            userId: cookies.user.id,
            date,
            price,
            typeId: type
        }

        saveNewOrder(data).then(response => {

            if (response !== undefined) {
                new Alert("success", response).showAlert()
                fetchData().then(resp => {
                    setOrders(resp)
                })
                document.getElementById("new-order").reset()
            }
            else {
                new Alert("error", "Adding order failed!").showAlert()
            }

        })

    }

    const saveNewOrder = async (data) => {
        try {
            const resp = await axios.post(API_BASE_URL + "/order/add", data, {headers: authHeader(cookies.user)})
            return resp.data
        }
        catch (e) {
            new Alert("error", "Server error while adding order!").showAlert()
        }
    }





    if (orders.orderDayList) {
        return <div className="orders__main">
            <div className="income__newIncome">
                <a href="/farm/all-order"><h4>All orders</h4></a>
                <h4>Add order</h4>
                <form id={"new-order"} onSubmit={handleNewOrder}>
                    <input id={"order__name"} required={"required"} placeholder={"Order name"} type="text"/> <br/>
                    <select className={"income__select"} name="type" id="order__option">
                        {
                            options.map(option => (
                                <option value={option.id}>{option.name}</option>
                            ))
                        }

                    </select> <br/>
                    <input id={"order__price"} required={"required"} placeholder={"Price of order"} type="text"/> <br/>
                    <input id={"order__date"} required={"required"} type="date"/> <br/>
                    <button type={"submit"}>Add</button>
                </form>
            </div>
            <h4>Orders:</h4>
            <div className="orders__refreshButtonContainer"><button onClick={event => {refresh()}} className="refresh__button">???</button></div>
                <OrderLister data={orders} />
        </div>
    }


    return <div className="orders__main">
            <h1>LOADING</h1>
    </div>
}



export default Orders;
