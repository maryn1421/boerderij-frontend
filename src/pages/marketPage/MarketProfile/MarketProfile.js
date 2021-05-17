import React, {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import './marketProfile.css'
import axios from "axios";
import {API_BASE_URL} from "../../../constants";
import deleteICon from "./delete.png"
import profileIcon from './icon.png'

const MarketProfile = () => {
    const [cookies, setCookies] = useCookies("user")
    const [sales, setSales] = useState([]);


    document.body.style.backgroundColor = "#ADEFD1FF";
    useEffect(() => {
        if (cookies.user?.token) {
            fetchSalesByUser().then(resp => {
                setSales(resp)
            })
        }
    }, [])


    const formatDate = date => {
        let newDate = new Date(date)
        return newDate.toLocaleDateString();
    }


    const fetchSalesByUser = async () => {
        try {
            const response = await axios.get(API_BASE_URL + "/market/all-sale/" + cookies.user.id)
            return response.data

        } catch (e) {
            console.log(e)
        }

    }


    if (cookies.user?.token && sales) {

        console.log(sales)


        return <div className="marketProfile__main">
            <div className="marketProfile__dataContainer">
                <img className={"profileIcon"} src={profileIcon} alt="profile-icon"/>
            </div>
            <div className="marketProfile__salesContainer">
             <h3 className={"profile__title"}>Hirdetéseid:</h3>
                {
                    sales.map(sale => (
                        <div className="profile__singleSale">
                            <div className={"profile__leftContainer"}>
                                <img className={"single_image"} src={API_BASE_URL + "/market/image/" + sale?.photoName}
                                     alt=""/>
                                <div className="singleSale__description">
                                    <p>{sale.title}</p>
                                    <p>{new Intl.NumberFormat().format(sale?.price)} Forint</p>
                                    <div className="singleSale__bottomContainer">
                                        <p>{sale?.province},</p>
                                        <p>{sale?.city},</p>
                                        <p>{formatDate(sale?.startDate)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="singleSale__rightContainer">
                                <p>👁 {sale?.viewNumber}</p>
                                <p className={"trashBag"}>🗑</p>
                                <p>✎</p>
                                <p>Megtekintés</p>
                            </div>
                        </div>


                    ))
                }
            </div>
        </div>
    } else {
        return <div className="private__main">
            <p>Ehhez a funkcióhoz belépés szükséges! D:</p>
            <a href="/login">Belépés</a> <br/>
            <a href="/market">Vissza</a>
        </div>
    }

}


export default MarketProfile;