import React from "react";


const IncomeLister = (props) => {







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
                            <td>{item.date}</td>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.price} forint</td>
                        </tr>
                    ))
                    }

                    </tbody>
                </table>
            </div>
    </div>
}

export default IncomeLister