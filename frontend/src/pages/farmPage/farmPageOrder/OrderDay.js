import React from "react";
import axios from "axios";
import {API_BASE_URL} from "../../../constants";
import {useCookies} from "react-cookie";
import authHeader from "../../../security/auth-header";

const OrderDay = (props) => {
    const [cookies, setCookies] = useCookies("user");





    const fetchData = async () => {
        try {
            const resp = await axios.get(API_BASE_URL + "/order/" + cookies.user.id + "/orders/14", {headers: authHeader(cookies.user)})
            return resp.data
        }
        catch (e) {
            console.log(e)
        }
    }

    fetchData().then(resp => {
        console.log(resp)
    })


    return <div className="orderDay__main">
        <h1>{props.data.title}</h1>
    </div>
}

export default OrderDay;