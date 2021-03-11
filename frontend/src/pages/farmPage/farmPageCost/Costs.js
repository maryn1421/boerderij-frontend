import React, {useEffect, useState} from 'react'
import {useCookies} from "react-cookie";
import axios from "axios";
import {API_BASE_URL} from "../../../constants";
import authHeader from "../../../security/auth-header";
import Alert from "../../../components/alert/alert";
import CostLister from "./CostLister";



const Costs = () => {
    const [options, setOptions] = useState([])
    const [cookies, setCookies] = useCookies("user");
    const [costData, setCostData] = useState([]);


    useEffect(() => {
        getCostOptions().then(response => {
            setOptions(response)
        })
    }, [])

    useEffect(() => {
        getCosts().then(response => {
            setCostData(response)
        })
    }, [])


    const getCostOptions = async () => {
        try {
            const resp = await axios.get(API_BASE_URL + "/costOptions/" + cookies.user.id, {headers: authHeader(cookies.user)} )
            return resp.data
        }
        catch (e) {

        }
    }


    const getCosts = async () => {
        try {
            const resp = await axios.get(API_BASE_URL + "/cost/" + cookies.user.id + "/all", {headers: authHeader(cookies.user)} )
            return resp.data
        } catch (e) {
            new Alert("error", "Szerver hiba!").showAlert()
        }
    }




    const submitNewCost = e => {
        e.preventDefault()

        const name = document.getElementById("cost__name").value
        const price = document.getElementById("cost__price").value
        const option = document.getElementById("cost__option").value
        const date = document.getElementById("cost__date").value

        const data = {
            name: name,
            value: price,
            date: date,
            optionId: option,
            userId: cookies.user.id
        }

        saveNewCost(data).then(response => {
            if (response !== undefined) {
                new Alert("success", response).showAlert()
                getCosts().then(response => {
                    setCostData(response)
                })
            }
            else {
                new Alert("error", "Sikertelen hozzáadás").showALert()
            }
        })
    }


    const saveNewCost = async data => {
        try {
            const resp = await axios.post(API_BASE_URL + "/cost/add", data , {headers: authHeader(cookies.user)} )
            return resp.data

        }catch (e) {
            new Alert("error", "Szerver hiba!").showAlert();
        }
    }

    return <div className="income__Main">
        <div className="income__newIncome">
            <h4>Új Kiadás</h4>
            <form onSubmit={submitNewCost}>
                <input id={"cost__name"} required={"required"} placeholder={"kiadás neve"} type="text"/> <br/>
                <select className={"income__select"} name="type" id="cost__option">
                    {
                        options.map(option => (
                            <option value={option.id}>{option.name}</option>
                        ))
                    }

                </select> <br/>
                <input id={"cost__price"} required={"required"} placeholder={"kiadás összege"} type="text"/> <br/>
                <input id={"cost__date"} required={"required"} type="date"/> <br/>
                <button type={"submit"}>Hozzáadás</button>
            </form>
        </div>
        <CostLister data={costData} options={options} />
    </div>
}


export default Costs;