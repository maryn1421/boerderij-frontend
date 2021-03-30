import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_BASE_URL} from "../../../constants";
import {useCookies} from "react-cookie";
import authHeader from "../../../security/auth-header";


const AllOrder = () => {
    const [orders, setOrders] = useState();
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


    let content = <div className="loading"><h1>LOADING</h1></div>

    return content;


}


export default AllOrder