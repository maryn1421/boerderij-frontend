import React, {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import './marketProfile.css'
import axios from "axios";
import {API_BASE_URL} from "../../../constants";
import profileIcon from './icon.png'
import authHeader from "../../../security/auth-header";

const MarketProfile = () => {
    const [cookies, setCookies] = useCookies("user")
    const [sales, setSales] = useState([]);
    const [user, setUser] = useState([])


    document.body.style.backgroundColor = "#ADEFD1FF";
    useEffect(() => {
        if (cookies.user?.token) {
            fetchSalesByUser().then(resp => {
                setSales(resp)
            })
        }
    }, [])


    useEffect(() => {
        if (cookies.user?.token) {
            fetchUserById().then(resp => {
                setUser(resp)
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



    const fetchUserById = async () => {
        try {
            const response = await axios.get(API_BASE_URL + '/user/' + cookies.user.id , {headers: authHeader(cookies.user)})
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }


    if (cookies.user?.token && sales && user) {
        console.log(user)



        return <div className="marketProfile__main">
            <div className="marketProfile__dataContainer">
                <img className={"profileIcon"} src={profileIcon} alt="profile-icon"/>
                <div className="profileDatas">
                    <p>{user?.name}</p>
                    <p>{user?.email}</p>
                    <p>Number of advertisements: {sales?.length}</p>
                    <a href="/market/profile/edit-data">✎ Modify data</a>
                </div>
            </div>
            <div className="marketProfile__salesContainer">
             <h3 className={"profile__title"}>Your advertisements:</h3>
                {
                    sales.map(sale => (
                        <div className="profile__singleSale">
                            <div className={"profile__leftContainer"}>
                                <img className={"single_image"} src={API_BASE_URL + "/market/image/" + sale?.photoName}
                                     alt=""/>
                                <div className="singleSale__description">
                                    <p>{sale.title}</p>
                                    <p>{new Intl.NumberFormat().format(sale?.price)} HUF</p>
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
                                <a href={"/market/sale/" + sale.id}>View</a>
                            </div>
                        </div>


                    ))
                }
            </div>
        </div>
    } else {
        return <div className="private__main">
            <p>You need to log in first! D:</p>
            <a href="/login">Login</a> <br/>
            <a href="/market">Back</a>
        </div>
    }

}


export default MarketProfile;
