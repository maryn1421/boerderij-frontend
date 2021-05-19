import React from "react";
import './mainPage.css'
import photo1 from './mainpage1.jpg'
import photo2 from './mainpage2.jpg'
import photo3 from './mainpage3.jpg'
import photo4 from './mainpage4.jpg'
import { Zoom } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const MainPage = () => {

    const images = [photo1, photo2, photo3, photo4];

    const zoomOutProperties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        scale: 0.4,
        arrows: true
    };


    return <div className="mainPage">
            <div className="mainPage__title">
                <h1>De Boerderij</h1>
            </div>
            <div className="mainPage__menu">
                <div className="mainPage__menuItem">
                    <a href="#about">About</a>
                </div>
                <div className="mainPage__menuItem">
                    <a href="#use">Usage</a>
                </div>
                <div className="mainPage__menuItem">
                    <a href="/login">Login</a>
                </div>
                <div className="mainPage__menuItem">
                    <a href="/signup">Registration</a>
                </div>
            </div>
            <div className="mainPage_photoContainer">
                <Zoom {...zoomOutProperties}>
                    {images.map((each, index) => (
                        <img key={index} className={"slider__image"} src={each}  alt={"slide-image"}/>
                    ))}
                </Zoom>
            </div>
            <div id={"about"} className="mainPage__aboutTheApp">
                <div className="mainPage__sectionTitle">
                    <h3>About the page</h3>
                    <section className={"about_text"}>
                        {/*Az oldal neve, a De Boederij egy holland kifejezés, jelentése a farm.*/}
                        {/*Az oldal fő célja, hogy mezőgazdasággal foglalkozó emberek munkáját megkönnyítse olyan adatok tárolása/monitorozása szempontjából, mint kiadások, bevételek, állatok számon tartása.*/}
                        The name of the page, De Boerderij is a dutch word, means Farm.
                        The main goal of the site is to provide an easy way for people who are in the agriculture sector to store and monitorize data like incomes, expenses or keep tally on animals.
                    </section>
                </div>
            </div>
            <div id={"use"} className="mainPage__useTheApp">
                <h3>Usage</h3>
                <section className="useText">
                    {/*Az oldal használatához egy regisztrációra van szükség (<a href="/signup">Ugrás a regisztrációs oldalra</a>). A regisztrációhoz egy email címet, a neved illetve egy minimum 6 karakterből álló jelszót kell megadnod.*/}
                    {/*A regisztráció sikerességéről visszajelzést fogsz kapni az adott oldalon. Sikeres regisztráció után be tudsz már jelentkezni a megadott email címmel, illetve jelszóval.*/}
                    {/*Amennyiben már szeretnél neki a látni az adatok felvételéhez, akkor a beállítások menü alatt tudsz felvenni kiadás, illetve bevétel típust (pl.: tojás, tej).*/}
                    In order to use the page, you have to register first (<a href="/signup">Jump to Registration</a>). For the registration you will need a valid e-mail address, your name, and a password containing minimum 6 characters.
                    If the registration was successful, you will get a confirmation. After that, you are going to be able to Log in.
                    So long as you want to add some data, you have to navigate to Settings page, there you can add Expenses or Incomes (Eg.: egg, milk).
                </section>
            </div>
    </div>
}


export default MainPage;
