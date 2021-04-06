import React from 'react'


const Patch = (props) => {





    return <div className="patch__main">
        <h2>{props?.data.number}</h2>
        <div className="patch__overlay">
            <p className={"patch__description"}>{props?.data.description}</p>
            <p className={"patch__description"}>{props?.data.date}</p>
        </div>
    </div>

}



export default Patch;