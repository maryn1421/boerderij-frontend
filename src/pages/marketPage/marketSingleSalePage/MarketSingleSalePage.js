import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './SingleSale.css'
import {API_BASE_URL} from "../../../constants";
import axios from "axios";
import GoogleMapReact from 'google-map-react';



const MarketSingleSalePage = () => {
    const [sale, setSale] = useState([]);
    const [mapData, setMapData] = useState([])

    let {id} = useParams();

    document.body.style.backgroundColor = "#ADEFD1FF";


    useEffect(() => {
        fetchSaleById().then(response => {
            if (response.id === null) {
                window.location.href = "/market/error"
            } else {
                setSale(response)
                fetchMapData(response).then(resp => {
                    setMapData(resp.results)
                })
            }
        })

    }, [])





    console.log(mapData)

    const fetchSaleById = async () => {
        try {
            const resp = await axios.get(API_BASE_URL + "/market/sale/" + id)
            return resp.data
        } catch (e) {
            console.log(e)
        }
    }

    const fetchMapData = async (sale) => {
        console.log(sale.city)
        try {
            const resp = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + sale.city + "&region=hu&key=AIzaSyCxKALMMrebblFHpA3oZGeJoAA72lHHDkU")
            return resp.data
        } catch (e) {

        }

    }
    let map = ""



    if (mapData.length !== 0) {

        const center = {
            lat: mapData[0]?.geometry.location.lat,
            lng: mapData[0]?.geometry.location.lng
        }
        console.log(center)


        map =   <div >
            <div className="saleMapContainer" style={{height: '40vh', width: '80%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyCxKALMMrebblFHpA3oZGeJoAA72lHHDkU"}}
                    defaultCenter={center}
                    defaultZoom={12}
                >
                </GoogleMapReact>
            </div>
        </div>
    }


    return <div className="marketSingleSalePage__main">
        <div className="saleContainer">
            <div className="saleTitle">
                <h1>{sale?.title}</h1>
            </div>
            <div>
                <img className="saleImage" src={API_BASE_URL + "/market/image/" + sale?.photoName} alt=""/>
            </div>
            <div className="saleDataContainer">
                <section>{sale?.description}</section>
            </div>
            {map}

        </div>
    </div>
}


export default MarketSingleSalePage;