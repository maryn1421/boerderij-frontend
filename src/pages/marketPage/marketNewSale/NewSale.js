import React from "react";
import './newSale.css'
import {useCookies} from "react-cookie";
import axios from "axios";
import {API_BASE_URL} from "../../../constants";
import Alert from "../../../components/alert/alert";


const NewSale = () => {
    const [cookies, setCookies] = useCookies("user");


    document.body.style.backgroundColor = "#ADEFD1FF";


    const submitNewSale = (e) => {
        e.preventDefault()
        const data = {
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
            type: document.getElementById("type").value,
            province: document.getElementById("province").value,
            city: document.getElementById("city").value,
            price: document.getElementById("price").value,
            startDate: document.getElementById("start-date").value,
            endDate: document.getElementById("end-date").value,
            userId: cookies.user.id
        }

        addNewSale(data).then(resp => {
            if (resp.status === 201) {
                if (resp.id) {
                    let formData = new FormData();
                    formData.append("file", e.target.image.files[0]);
                    addImageToSale(formData, resp.id).then(response => {
                        if (response !== undefined) {
                            document.getElementById("new-sale-form").reset()
                            new Alert("success", "Sikeres rendelés hozzáadás").showAlert()
                        } else {
                            new Alert("error", "Hiba a rendelés hozzáadása során").showAlert()
                        }
                    })
                }
            }


        })
    }


    const addImageToSale = async (data, id) => {
        try {
            const response = await axios.post(API_BASE_URL + "/market/add/image/" + id, data, {headers: {"Content-Type": "multipart/form-data"}})
            return response.data
        } catch (e) {
            console.log(e)

        }
    }


    const addNewSale = async (data) => {
        try {
            const resp = await axios.post(API_BASE_URL + "/market/add", data)
            return resp.data;
        } catch (e) {
            console.log(e)

        }
    }

    if (cookies.user?.token) {
        return <div className="newSale__main">
            <h1>HIRDETÉS FELADÁSA</h1>
            <div className="newSale__formContainer">
                <form id={"new-sale-form"} onSubmit={submitNewSale}>
                    <label>Hirdetés szöveg címe: </label>
                    <input type="text" name={"title"} id={"title"} required={"required"}/>

                    <label>Hirdetés szövege: </label>
                    <input type="text" name={"description"} id={"description"} required={"required"}/>


                    <label>Típus:</label>
                    <select name="type" id="type">
                        <option value="ANIMAL">Állat</option>
                        <option value="FOOD">Takarmány</option>
                        <option value="PRODUCT">Termék</option>
                    </select>
                    <label>Megye:</label>
                    <select name="province" id="province">
                        <option value="Bács-kiskun">Bács-kiskun</option>
                        <option value="Baranya">Baranya</option>
                        <option value="Békés">Békés</option>
                        <option value="Borsod-Abaúj-Zemplén">Borsod-Abaúj-Zemplén</option>
                        <option value="Budapest">Budapest</option>
                        <option value="Csongrád">Csongrád</option>
                        <option value="Fejér">Fejér</option>
                        <option value="Győr-Moson-Sopron">Győr-Moson-Sopron</option>
                        <option value="Hajdú-Bihar">Hajdú-Bihar</option>
                        <option value="Heves">Heves</option>
                        <option value="Jász-Nagykun-Szolnok">Jász-Nagykun-Szolnok</option>
                        <option value="Komárom-Esztergom">Komárom-Esztergom</option>
                        <option value="Nógrád">Nógrád</option>
                        <option value="Pest">Pest</option>
                        <option value="Somogy">Somogy</option>
                        <option value="Szabolcs-Szatmár-Bereg">Szabolcs-Szatmár-Bereg</option>
                        <option value="Tolna">Tolna</option>
                        <option value="Vas">Vas</option>
                        <option value="Veszprém">Veszprém</option>
                        <option value="Zala">Zala</option>
                    </select>

                    <label>Település:</label>
                    <input type="text" name={"city"} id={"city"} required={"required"}/>

                    <label>Hirdetés ára: (forint) </label>
                    <input type="number" id={"price"} name={"price"} required={"required"}/>

                    <label>Hirdetés kezdete: </label>
                    <input type="date" name={"price"} id={"start-date"} required={"required"}/>

                    <label>Hirdetés vége:</label>
                    <input type="date" name={"price"} id={"end-date"} required={"required"}/>

                    <label>Fénykép: </label>
                    <input type="file" name={"image"} id={"image"} required={"required"}/>

                    <button type={"submit"}>Feladás</button>
                </form>
            </div>

        </div>
    }
    else {
        return <div className="private__main">
            <p>Ehhez a funkcióhoz belépés szükséges! D:</p>
            <a href="/login">Belépés</a> <br/>
            <a href="/market">Vissza</a>
        </div>
    }
}

export default NewSale;