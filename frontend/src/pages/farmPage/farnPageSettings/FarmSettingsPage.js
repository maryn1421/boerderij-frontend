import React from 'react'
import FarmMenu from "../FarmMenu";
import FarmSettings from "./FarmSettings";



const FarmSettingsPage = () => {

    return <div className="farmPage__main">
        <FarmMenu/>
        <FarmSettings />
    </div>
}

export default FarmSettingsPage;