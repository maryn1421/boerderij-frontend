import React from "react";
/* import './mainPage.css'
import photo1 from './mainpage1.jpg'
import photo2 from './mainpage2.jpg'
import photo3 from './mainpage3.jpg'
import photo4 from './mainpage4.jpg'
import { Zoom } from "react-slideshow-image"; */
import 'react-slideshow-image/dist/styles.css'
import cinema from "./mozi.jpg"
import zoo from "./zoo.jpg"
import tropicarium from "./tropicarium.jpg"
import caravella from "./caravella.jpg"
import vac from "./vac.jpg"
import budapest from "./budapest.jpg"
import godollo from "./godollo.jpg"
import './ideasPage.css'

const IdeasPage = () => {

    /* const images = [photo1, photo2, photo3, photo4]; */


    return <div className="ideasPage">
        <div className="header">
            <h1>Kedves Dorina! Itt van pár program ötlet szombatra: </h1>
        </div>
        <div className="container">
            <div className="content">
                <img src={cinema} ></img>
                <p>Mozi (Gödöllő vagy Pest)</p>
            </div>
            <div className="content">
                <img src={zoo} ></img>
                <p>Állatkert</p>
            </div>
            <div className="content">
                <img src={tropicarium} ></img>
                <p>Tropicarium</p>
            </div>
            <div className="content">
                <img src={caravella} ></img>
                <p>Caravella café (Gödöllő) </p>
            </div>
            <div className="content">
                <img src={vac} ></img>
                <p>"Ebéd" Vácott </p>
            </div>
            <div className="content">
                <img src={godollo} ></img>
                <p>"Ebéd" Gödöllőn </p>
            </div>
            <div className="content">
                <img src={budapest} ></img>
                <p>"Ebéd" Budapesten </p>
            </div>
        </div>
    </div>
}


export default IdeasPage;