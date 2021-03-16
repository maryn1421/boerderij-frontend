import React from "react";

const OrderDay = (props) => {

    console.log(props)


    const formatDate = date => {
        let newDate = new Date(date)
        return newDate.toLocaleDateString();
    }

    return <div className="orderDay__main">
        <h1>{formatDate(props.data.date)}</h1>
        <div className="orderDay__orders">

        </div>
    </div>
}

export default OrderDay;