import React from "react";
import {useCookies} from "react-cookie";

const MarketProfile = () => {
    const [cookies, setCookies] = useCookies("user")



    document.body.style.backgroundColor = "#ADEFD1FF";



    if (cookies.user?.token) {
        return <marketProfile className="main">

        </marketProfile>
    }
    else {
        return <div className="private__main">
            <p>Ehhez a funkcióhoz belépés szükséges! D:</p>
            <a href="/login">Belépés</a> <br/>
            <a href="/market">Vissza</a>
        </div>
    }

}


export default MarketProfile;