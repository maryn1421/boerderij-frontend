import React from "react";
import OrderDay from "./OrderDay";


const OrderLister = (props) => {

   let orders = [{id:0, title: "tetszt"},{id: 1, title: "tetszt"},{id: 2,  title: "tetszt"},{id: 3, title: "tetszt"},{id: 4, title: "tetszt"},{id:5 , title: "tetszt"},]




    return <div className="orderLister__main">

        {orders.map(order => {
         return  <OrderDay key={order.id} data ={order} />
        })


        }


    </div>
}

export default OrderLister;