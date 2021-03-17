import React from "react";
import Order from "./Order";

const OrderDay = (props) => {


    const formatDate = date => {
        let newDate = new Date(date)
        return newDate.toLocaleDateString();
    }

    return <div className="orderDay__main">
        <h1>{formatDate(props.data.date)}</h1>
        <div className="orderDay__orders">
            {props.data.orders.map(order => {
                    return <Order key={order.id} data={order}  />
                }
            )}
        </div>
    </div>
}

export default OrderDay;