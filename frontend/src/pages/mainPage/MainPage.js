import React from "react";
import './mainPage.css'
import photo from './mainpage1.jpg'

const MainPage = () => {

    document.body.style.backgroundColor = "black"


    return <div className="mainPage">
            <div className="mainPage__title">
                <h1>De Boederij</h1>
            </div>
            <div className="mainPage__menu">

            </div>
            <div className="mainPage_photoContainer">
                <img className={"mainPage__photo"} src={photo} alt=""/>
            </div>
            <div className="mainPage__aboutTheApp">
                <div className="mainPage__sectionTitle">
                    <h3>Az oldalról</h3>
                    <section className={"about_text"}>
                        Az oldal neve, a De Boederij egy holland kifejezés, jelentése a farm.
                        Az oldal fő célja, hogy mezőgazdasággal foglalkozó emberek munkáját megkönnyítse olyan adatok tárolása/monitorozása szempontjából, mint kiadások, bevételek, állatok számon tartása.
                    </section>
                </div>
            </div>
            <div className="mainPage__useTheApp">
                <h3>Használat</h3>
                <section className="useText">
                    Az oldal használatához egy regisztrációra van szükség (<a href="/signup">Ugrás a regisztrációs oldalra</a>). A regisztrációhoz egy email címet, a neved illetve egy minimum 6 karakterből álló jelszót kell megadnod.
                    A regisztráció sikerességéről visszajelzést fogsz kapni az adott oldalon. Sikeres regisztráció után be tudsz már jelentkezni a megadott email címmel, illetve jelszóval.
                    Amennyiben már szeretnél neki a látni az adatok felvételéhez, akkor a beállítások menü alatt tudsz felvenni kiadás, illetve bevétel típust (pl.: tojás, tej).
                </section>
            </div>
    </div>
}


export default MainPage;