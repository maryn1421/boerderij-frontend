import React from "react";
import './income.css'
import IncomeLister from "./IncomeLister";

const Income = () => {


    const sampleData = [
        {date: "2021.2.28", name: "test name 1", type: "Animal", price: 100000 },
        {date: "2020.12.24", name: "test name 2", type: "Vehicle", price: 5000 },
        {date: "2021.1.12", name: "test name 3", type: "Feed", price: 5000324 },
        {date: "2020.10.05", name: "test name 4", type: "Animal", price: 50003300 },  {date: "2021.2.28", name: "test name 1", type: "Animal", price: 100000 },
        {date: "2020.12.24", name: "test name 2", type: "Vehicle", price: 5000 },
        {date: "2021.1.12", name: "test name 3", type: "Feed", price: 5000324 },
        {date: "2020.10.05", name: "test name 4", type: "Animal", price: 50003300 },  {date: "2021.2.28", name: "test name 1", type: "Animal", price: 100000 },
        {date: "2020.12.24", name: "test name 2", type: "Vehicle", price: 5000 },
        {date: "2021.1.12", name: "test name 3", type: "Feed", price: 5000324 },
        {date: "2020.10.05", name: "test name 4", type: "Animal", price: 50003300 },  {date: "2021.2.28", name: "test name 1", type: "Animal", price: 100000 },
        {date: "2020.12.24", name: "test name 2", type: "Vehicle", price: 5000 },
        {date: "2021.1.12", name: "test name 3", type: "Feed", price: 5000324 },
        {date: "2020.10.05", name: "test name 4", type: "Animal", price: 50003300 },  {date: "2021.2.28", name: "test name 1", type: "Animal", price: 100000 },
        {date: "2020.12.24", name: "test name 2", type: "Vehicle", price: 5000 },
        {date: "2021.1.12", name: "test name 3", type: "Feed", price: 5000324 },
        {date: "2020.10.05", name: "test name 4", type: "Animal", price: 50003300 },  {date: "2021.2.28", name: "test name 1", type: "Animal", price: 100000 },
        {date: "2020.12.24", name: "test name 2", type: "Vehicle", price: 5000 },
        {date: "2021.1.12", name: "test name 3", type: "Feed", price: 5000324 },
        {date: "2020.10.05", name: "test name 4", type: "Animal", price: 50003300 },  {date: "2021.2.28", name: "test name 1", type: "Animal", price: 100000 },
        {date: "2020.12.24", name: "test name 2", type: "Vehicle", price: 5000 },
        {date: "2021.1.12", name: "test name 3", type: "Feed", price: 5000324 },
        {date: "2020.10.05", name: "test name 4", type: "Animal", price: 50003300 },  {date: "2021.2.28", name: "test name 1", type: "Animal", price: 100000 },
        {date: "2020.12.24", name: "test name 2", type: "Vehicle", price: 5000 },
        {date: "2021.1.12", name: "test name 3", type: "Feed", price: 5000324 },
        {date: "2020.10.05", name: "test name 4", type: "Animal", price: 50003300 },  {date: "2021.2.28", name: "test name 1", type: "Animal", price: 100000 },
        {date: "2020.12.24", name: "test name 2", type: "Vehicle", price: 5000 },
        {date: "2021.1.12", name: "test name 3", type: "Feed", price: 5000324 },
        {date: "2020.10.05", name: "test name 4", type: "Animal", price: 50003300 },  {date: "2021.2.28", name: "test name 1", type: "Animal", price: 100000 },
        {date: "2020.12.24", name: "test name 2", type: "Vehicle", price: 5000 },
        {date: "2021.1.12", name: "test name 3", type: "Feed", price: 5000324 },
        {date: "2020.10.05", name: "test name 4", type: "Animal", price: 50003300 },
    ]

    const submitNewIncome = e => {
        e.preventDefault()

    }
    return <div className="income__Main">
            <div className="income__newIncome">
                <h4>Új Bevétel</h4>
                <form onSubmit={submitNewIncome}>
                    <input placeholder={"bevétel neve"} type="text"/> <br/>
                    <select className={"income__select"} name="type" id="type">
                        <option value="animal">Állat</option>
                        <option value="feed">Takarmány</option>
                    </select> <br/>
                    <input placeholder={"bevétel összege"} type="text"/> <br/>
                    <input type="date"/> <br/>
                    <button type={"submit"}>Hozzáadás</button>
                </form>
            </div>
            <IncomeLister data={sampleData} />

    </div>

}
export default Income