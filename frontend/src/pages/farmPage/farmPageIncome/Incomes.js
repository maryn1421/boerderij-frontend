import React from "react";
import './income.css'

const Income = () => {


    const submitNewIncome = e => {
        e.preventDefault()

    }
    return <div className="income__Main">
            <div className="income__newIncome">
                <h4>Új Bevétel</h4>
                <form onSubmit={submitNewIncome}>
                    <input placeholder={"bevétel neve"} type="text"/> <br/>
                    <input placeholder={"bevétel összege"} type="text"/> <br/>
                    <input type="date"/> <br/>
                    <button type={"submit"}>Hozzáadás</button>
                </form>
            </div>
    </div>

}
export default Income