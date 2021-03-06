import React from "react";
import Alert from "../../../components/alert/alert";
import axios from "axios";
import {API_BASE_URL} from "../../../constants";
import {useCookies} from "react-cookie";
import authHeader from "../../../security/auth-header";


const AllOrdersSingleOrder = (props) => {
    const [cookies, setCookies] = useCookies("user");



    const handleSetOrderPaid = () => {
        if (window.confirm("Are you setting " + props?.data.name +  " status to payed?")) {
            setOrderPaid().then(response => {
                if (response !== null) {
                    new Alert("success", response).showAlert();

                }
                else {
                    new Alert("error", "error").showAlert();
                }
            })
        }
    }


    const handleSetOrderFinished = () => {
        if (window.confirm("Are you setting" + props.data.name + " status to closed?")) {
            setOrderFinished().then(response => {
                if (response !== null) {
                    new Alert("success", response).showAlert();
                }
                else {
                    new Alert("error", "error").showAlert();
                }
            })
        }
    }
    const handleDeleteOrder = () => {
        if (window.confirm("Do you want to delete " + props.data.name + " ?")) {
            deleteOrder().then(response => {
                if (response !== null) {
                    new Alert("success", response).showAlert();
                }
                else {
                    new Alert("error", "error").showAlert();
                }
            })
        }
    }

    const setOrderPaid = async () => {
        try {
            const resp = await axios.put(API_BASE_URL + "/order/" + cookies.user.id + "/paid/"+ props.data.id, {}, {headers: authHeader(cookies.user)})
            return resp.data
        }
        catch (e) {
            new Alert("error", "error").showAlert();
        }
    }

    const setOrderFinished = async () => {
        try {
            const resp = await axios.put(API_BASE_URL + "/order/" + cookies.user.id + "/finish/"+ props.data.id, {}, {headers: authHeader(cookies.user)})
            return resp.data
        }
        catch (e) {
            new Alert("error", "error").showAlert();
        }
    }
    const deleteOrder = async () => {
        try {
            const resp = await axios.delete(API_BASE_URL + "/order/delete/"+ props.data.id, {headers: authHeader(cookies.user)})
            return resp.data
        }
        catch (e) {
            new Alert("error", "error").showAlert();
        }
    }


    const formatDate = date => {
        let newDate = new Date(date)
        return newDate.toLocaleDateString();
    }


    const createClassList = () => {
        let classes = "singleOrder__mainContainer"

        if (props.data.finished) {
            classes += " finished__single"
        }
        if (props.data.isPaid) {
            classes = "singleOrder__mainContainer paid"
        }
        return classes;
    }


    return <div className={createClassList()}>
        <p>{formatDate(props?.data.date)}</p>
        <p>{props?.data.name}</p>
        <p>{props?.data.price} forint</p>
        <div className="single__actionsContainer">
            {props?.data.finished ? "" : <p onClick={e => handleSetOrderFinished()}>Close</p>}
            {props?.data.isPaid ? "" : <p onClick={e => {handleSetOrderPaid()}}>Payed</p> }
            <p onClick={e => handleDeleteOrder()}>Delete</p>
        </div>
    </div>
}


export default AllOrdersSingleOrder;
