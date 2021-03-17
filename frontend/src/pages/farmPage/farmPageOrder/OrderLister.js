import React from "react";
import OrderDay from "./OrderDay";


const OrderLister = (props) => {


    return <div className="orderLister__main">

        {props?.data.orderDayList.map(order => {
         return  <OrderDay key={order.date} data ={order} />
        })
        }

    </div>
}

export default OrderLister;