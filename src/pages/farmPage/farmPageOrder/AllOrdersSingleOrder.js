import React from "react";
import Alert from "../../../components/alert/alert";
import axios from "axios";
import {API_BASE_URL} from "../../../constants";
import {useCookies} from "react-cookie";
import authHeader from "../../../security/auth-header";


const AllOrdersSingleOrder = (props) => {
    const [cookies, setCookies] = useCookies("user");



    const handleSetOrderPaid = () => {
        if (window.confirm("Biztosan kifizetettre állítod a " + props?.data.name +  " nevű rendelést ")) {
            setOrderPaid().then(response => {
                if (response !== null) {
                    new Alert("success", response).showAlert();

                }
                else {
                    new Alert("error", "hiba történt").showAlert();
                }
            })
        }
    }


    const handleSetOrderFinished = () => {
        if (window.confirm("biztosan lezártra állítod a " + props.data.name + "  nevű rendelést")) {
            setOrderFinished().then(response => {
                if (response !== null) {
                    new Alert("success", response).showAlert();
                }
                else {
                    new Alert("error", "hiba történt").showAlert();
                }
            })
        }
    }
    const handleDeleteOrder = () => {
        if (window.confirm("biztosan törölni szeretnéd a " + props.data.name + "  nevű rendelést")) {
            deleteOrder().then(response => {
                if (response !== null) {
                    new Alert("success", response).showAlert();
                }
                else {
                    new Alert("error", "hiba történt").showAlert();
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
            new Alert("error", "hiba történt!").showAlert();
        }
    }

    const setOrderFinished = async () => {
        try {
            const resp = await axios.put(API_BASE_URL + "/order/" + cookies.user.id + "/finish/"+ props.data.id, {}, {headers: authHeader(cookies.user)})
            return resp.data
        }
        catch (e) {
            new Alert("error", "hiba történt!").showAlert();
        }
    }
    const deleteOrder = async () => {
        try {
            const resp = await axios.delete(API_BASE_URL + "/order/delete/"+ props.data.id, {headers: authHeader(cookies.user)})
            return resp.data
        }
        catch (e) {
            new Alert("error", "hiba történt!").showAlert();
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
            {props?.data.finished ? "" : <p onClick={e => handleSetOrderFinished()}>Lezárás</p>}
            {props?.data.isPaid ? "" : <p onClick={e => {handleSetOrderPaid()}}>Fizetve</p> }
            <p onClick={e => handleDeleteOrder()}>Törlés</p>
        </div>
    </div>
}


export default AllOrdersSingleOrder;