import React, {useState} from "react";
import Alert from "../../../components/alert/alert";
import axios from "axios";
import {API_BASE_URL} from "../../../constants";
import {useCookies} from "react-cookie";
import authHeader from "../../../security/auth-header";


const Order = (props) => {
    const [cookies, setCookies] = useCookies("user");
    const [classList, setClassList] = useState("");
    const forceUpdate = React.useReducer(bool => !bool)[1];





    const createClassList = () => {
        let classes = "singleOrder__main"

        if (props.data.finished) {
            classes += " finished"
        }

        return classes;
    }


    const saveFinishOrder = async () => {
        try {
            const resp = await axios.put(API_BASE_URL + "/order/" + cookies.user.id + "/finish/" + props.data.id, {}, {headers: authHeader(cookies.user)} )
            return resp.data;

        } catch (e) {
            new Alert("error", "Szerver hiba a rendelés módosítása során").showAlert()
        }
    }


    const finishOrder = () => {
       if  (window.confirm("Biztosan lezárod a " + props.data.name  + " nevü rendelést?")) {
           saveFinishOrder().then(response => {
               if (response !== undefined) {
                   new Alert("success", response).showAlert()
                   forceUpdate();
               }
               else {
                   new Alert("error", "Hiba a rendelés módosítása során").showAlert()

               }
           })
       }
    }


    let finishButton = "";

    if (!props.data.finished) {
        finishButton = <span onClick={e => {finishOrder()}}> pipa</span>
    }



    return <div className={createClassList()} >
        <p>{props.data.name}  {props.data.type}    {props.data.price} ft  {finishButton}</p>
    </div>
}

export default Order;