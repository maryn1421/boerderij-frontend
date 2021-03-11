import React, {useEffect, useState} from "react";
import './income.css'
import IncomeLister from "./IncomeLister";
import axios from "axios";
import {API_BASE_URL} from "../../../constants";
import {useCookies} from "react-cookie";
import authHeader from "../../../security/auth-header";
import Alert from "../../../components/alert/alert";

const Income = () => {
    const [options, setOptions] = useState([])
    const [cookies, setCookies] = useCookies("user");
    const [incomeData, setIncomeData] = useState([]);


    useEffect(() => {
        getIncomeOptions().then(response => {
            setOptions(response)
        })
    }, [])

    useEffect(() => {
        getIncomes().then(response => {
            setIncomeData(response)
        })
    }, [])
    
    
    const getIncomeOptions = async () => {
        try {
            const resp = await axios.get(API_BASE_URL + "/incomeOptions/" + cookies.user.id, {headers: authHeader(cookies.user)} )
            return resp.data
        }
        catch (e) {
            
        }
    }


    const getIncomes = async () => {
        try {
            const resp = await axios.get(API_BASE_URL + "/income/" + cookies.user.id + "/all", {headers: authHeader(cookies.user)} )
            return resp.data
        } catch (e) {
            console.log(e)
        }
    }

    


    const submitNewIncome = e => {
        e.preventDefault()

        const name = document.getElementById("income__name").value
        const price = document.getElementById("income__price").value
        const option = document.getElementById("income__option").value
        const date = document.getElementById("income__date").value

        const data = {
            name: name,
            value: price,
            date: date,
            optionId: option,
            userId: cookies.user.id
        }

        saveNewIncome(data).then(response => {
            if (response !== undefined) {
                new Alert("success", response).showAlert()
                getIncomes().then(response => {
                    setIncomeData(response)
                })
            }
            else {
                new Alert("error", "Sikertelen hozzáadás").showALert()
            }
        })
    }


    const saveNewIncome = async data => {
        try {
        const resp = await axios.post(API_BASE_URL + "/income/add", data , {headers: authHeader(cookies.user)} )
        return resp.data

        }catch (e) {
            new Alert("error", "Szerver hiba!").showAlert();
        }
    }

    return <div className="income__Main">
            <div className="income__newIncome">
                <h4>Új Bevétel</h4>
                <form onSubmit={submitNewIncome}>
                    <input id={"income__name"} required={"required"} placeholder={"bevétel neve"} type="text"/> <br/>
                    <select className={"income__select"} name="type" id="income__option">
                        {
                         options.map(option => (
                             <option value={option.id}>{option.name}</option>
                         ))
                        }
                        
                    </select> <br/>
                    <input id={"income__price"} required={"required"} placeholder={"bevétel összege"} type="text"/> <br/>
                    <input id={"income__date"} required={"required"} type="date"/> <br/>
                    <button type={"submit"}>Hozzáadás</button>
                </form>
            </div>
            <IncomeLister data={incomeData} options={options} />

    </div>

}
export default Income