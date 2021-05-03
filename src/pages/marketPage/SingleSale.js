import React from "react";
import {API_BASE_URL} from "../../constants";


const SingleSale = (props) => {

    const formatDate = date => {
        let newDate = new Date(date)
        return newDate.toLocaleDateString();
    }



    return <div className="singleSale__main">
        <img className={"single_image"} src={API_BASE_URL + "/market/image/" + props?.data.photoName } alt=""/>
        <div className="singleSale__description">
            <p>{props.data.title}</p>
            <p>{new Intl.NumberFormat().format(props.data.price)} Forint</p>

            <div className="singleSale__bottomContainer">
                <p>{props.data.province},</p>
                <p>{props.data.city},</p>
                <p>{formatDate(props.data.startDate)}</p>
            </div>

        </div>

    </div>
}


export default SingleSale;