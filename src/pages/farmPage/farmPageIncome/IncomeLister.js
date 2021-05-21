import React from "react";


const IncomeLister = (props) => {


    const getOptionName = id => {
        let name = "not found"
        props.options.forEach(option => {
            if (option.id === id) {
                name =  option.name
            }

        })
        return name;
    }


    const calculateTotal = () => {
        let total = 0;
        props.data.forEach(item => {
            total += parseInt(item.value)
        })

        return total;

    }



    const formatDate = date => {
       let newDate = new Date(date)
        return newDate.toLocaleDateString();
    }


    return <div className="IncomeLister__main">
        <h3>Bevételek listája:</h3>
        <div className="income__total">
            <p>Bevételek száma: {props.data.length}    Bevételek összértéke: {calculateTotal()}</p>
        </div>
            <div className="incomeLister__tableContainer">
                <table className={"income__table"}>
                        <thead>
                        <tr>
                        <th>Dátum</th>
                        <th>Név</th>
                        <th>Típus</th>
                        <th>Összeg</th>
                        </tr>
                        </thead>
                    <tbody>
                    {props.data.map(item => (
                        <tr>
                            <td>{formatDate(item.date)}</td>
                            <td>{item.name}</td>
                            <td>{getOptionName(item.incomeOptionId)}</td>
                            <td>{item.value} forint</td>
                        </tr>
                    ))
                    }

                    </tbody>
                </table>
            </div>
    </div>
}

export default IncomeLister