import React from 'react-alert'
import './farmSettings.css'
import axios from "axios";
import {API_BASE_URL} from "../../../constants";
import {useCookies} from "react-cookie";
import authHeader from "../../../security/auth-header";
import Alert from "../../../components/alert/alert";

const FarmSettings = () => {
    const [cookies, setCookies] = useCookies("user");
    const handleNewIncomeOption = (e) => {
        e.preventDefault()
        const name = document.getElementById("newIncomeInput").value;
        const data = {
            name: name
        }
        addNewIncomeOption(data).then(response => {
            if (response !== undefined) {
                console.log(response)
                new Alert("success", response).showAlert();
            }
            else {
               new Alert("error", "Adding failed!").showAlert()
            }
        })


    }


    const addNewIncomeOption = async (data) => {
        try {
            const resp = await  axios.post(API_BASE_URL + "/incomeOptions/" + cookies.user.id, data , {headers: authHeader(cookies.user)})
            return resp.data
        } catch (e) {
            console.log(e)

        }
    }
  const addNewCostOption = async (data) => {
        try {
            const resp = await  axios.post(API_BASE_URL + "/costOptions/" + cookies.user.id, data , {headers: authHeader(cookies.user)})
            return resp.data
        } catch (e) {
            console.log(e)

        }
    }

    const handleNewCostOption = (e) => {
        e.preventDefault()
        const name = document.getElementById("newCostInput").value;
        const data = {
            name: name
        }
        addNewCostOption(data).then(response => {
            if (response !== undefined) {
                new Alert("success", response).showAlert();
            }
            else {
                new Alert("error", "Error while adding new expense!").showAlert();
            }
        })
    }

    return <div className="farmSettings__main">
            <div className="farmSettings__inputs">
                <div className="farmSettings__newIncomeOption">
                    <h3>Add new income type:</h3>
                    <form onSubmit={handleNewIncomeOption}>
                        <input required={"required"} id={"newIncomeInput"} type="text"/> <br/>
                        <button>Add</button>
                    </form>
                </div>
                <div className="farmSettings__newIncomeOption">
                    <h3>Add new expense type:</h3>
                    <form onSubmit={handleNewCostOption}>
                        <input required={"required"} id={"newCostInput"} type="text"/> <br/>
                        <button>Add</button>
                    </form>
                </div>
            </div>
    </div>
}


export default FarmSettings
