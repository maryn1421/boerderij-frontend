import React from "react";
import './income.css'

const Income = () => {
    return <div className="income__Main">
            <div className="income__newIncome">
                <form >
                    <input type="text"/>
                    <input type="text"/>
                    <input type="date"/>
                    <button type={"submit"}>Hozzáadás</button>
                </form>
            </div>
    </div>

}
export default Income