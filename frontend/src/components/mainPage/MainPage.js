import React, {useState, useEffect} from "react";
import axios from "axios";
import {API_BASE_URL} from "../../constants";
import authHeader from "../../security/auth-header";


const mainPage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
   const [data, setData] = useState([])



    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchData().then(data => {
            setData(data)
        })
    }, [])




    console.log(data)




    const fetchData = async () => {
        try {
            const resp = await axios.get(API_BASE_URL + "/user/me", {headers: authHeader()})
            return resp.data
        }
        catch (e) {
            console.log(e)
        }
    }


    return <div className="mainPage__main">

    </div>
}


export default mainPage