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
            }
            else {
                new Alert("error", "Sikertelen rendelés hozzáadás!").showAlert()
            }

        })

    }

    const saveNewOrder = async (data) => {
        try {
            const resp = await axios.post(API_BASE_URL + "/order/add", data, {headers: authHeader(cookies.user)})
            return resp.data
        }
        catch (e) {
            new Alert("error", "Szerver hiba a rendelés hozzáadás során").showAlert()
        }
    }





    if (orders.orderDayList) {
        return <div className="orders__main">
            <div className="income__newIncome">
                <h4>Rendelés hozzáadása</h4>
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