import React from "react";


const NewSale = () => {

    return <div className="newSale__main">
        <h1>HIRDETÉS FELADÁSA</h1>
        <div className="newSale__formContainer">
            <form>
                <label>Hirdetés szöveg címe: </label>
                <input type="text" name={"title"} required={"required"}/>

                <label>Hirdetés szövege: </label>
                <input type="text" name={"description"} required={"required"}/>

                <label>Hirdetés szöveg címe: </label>
                <input type="text" name={"title"} required={"required"}/>

                <label>Típus:</label>
                <select name="type" id="type">
                    <option value="animal">Állat</option>
                    <option value="food">Takarmány</option>
                    <option value="product">Termék</option>
                </select>
                <label>Megye:</label>
                <select name="province" id="province">
                    <option value="Bács-kiskun">Bács-kiskun</option>
                    <option value="Baranya">Baranya</option>
                    <option value="Békés">Békés</option>
                    <option value="Borsod-Abaúj-Zemplén">Borsod-Abaúj-Zemplén</option>
                    <option value="Budapest">Budapest</option>
                    <option value="Csongrád">Csongrád</option>
                    <option value="Fejér">Fejér</option>
                    <option value="Győr-Moson-Sopron">Győr-Moson-Sopron</option>
                    <option value="Hajdú-Bihar">Hajdú-Bihar</option>
                    <option value="Heves">Heves</option>
                    <option value="Jász-Nagykun-Szolnok">Jász-Nagykun-Szolnok</option>
                    <option value="Komárom-Esztergom">Komárom-Esztergom</option>
                    <option value="Nógrád">Nógrád</option>
                    <option value="Pest">Pest</option>
                    <option value="Somogy">Somogy</option>
                    <option value="Szabolcs-Szatmár-Bereg">Szabolcs-Szatmár-Bereg</option>
                    <option value="Tolna">Tolna</option>
                    <option value="Vas">Vas</option>
                    <option value="Veszprém">Veszprém</option>
                    <option value="Zala">Zala</option>
                </select>


                <label>Hirdetés ára: (forint) </label>
                <input type="number" name={"price"} required={"required"}/>

                 <label>Hirdetés kezdete: </label>
                <input type="date" name={"price"} required={"required"}/>

                 <label>Hirdetés vége:</label>
                <input type="date" name={"price"} required={"required"}/>


                <label>Fénykép: </label>
                <input type="file" name={"title"} required={"required"}/>


                <button type={"submit"}>Feladás</button>
            </form>
        </div>

    </div>
}

export default NewSale;