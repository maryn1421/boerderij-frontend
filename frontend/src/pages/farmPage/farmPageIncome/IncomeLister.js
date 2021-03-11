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



    const formatDate = date => {
       let newDate = new Date(date)
        return newDate.toLocaleDateString();
    }


    return <div className="IncomeLister__main">
        <h3>Bevételek listája:</h3>
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