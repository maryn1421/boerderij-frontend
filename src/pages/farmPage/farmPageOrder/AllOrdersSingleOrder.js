import React from "react";


const AllOrdersSingleOrder = (props) => {
    const formatDate = date => {
        let newDate = new Date(date)
        return newDate.toLocaleDateString();
    }

    return <div className="singleOrder__main">
        <p>{formatDate(props?.data.date)}</p>
        <p>{props?.data.name}</p>
        <p>{props?.data.price} forint</p>
        <p>{props?.data.finished}</p>
        <p>Lezárás</p>
        <p>Fizetve</p>
        <p>Törlés</p>
    </div>
}


export default AllOrdersSingleOrder;