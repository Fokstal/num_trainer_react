import React, { useState } from "react";
import "./start_page.css"

import SelectPreset from "./select_preset/select_preset";
import TranslateNumber from "./translate_number/translate_number";

const StartPage = ({ goToMainPage }) => {

    const [page, setPage] = useState("select_preset");
    const [gameSettings, setData] = useState({});

    const goToSelectPresetPage = () => setPage("select_preset");
    const goToTranslateNumberPage = (value) => {
        setPage("guess_number");
        setData(value);
    }

    return (
        <div className="start-page">
            {page === "select_preset" && <SelectPreset goToTranslateNumberPage={goToTranslateNumberPage} />}
            {page === "guess_number" && <TranslateNumber gameSettings={gameSettings} goToSelectPresetPage={goToSelectPresetPage} />}
            <button className="btn-close btn btn-outline-dark m-4 mx-auto d-block" style={{ fontSize: ".8rem" }} onClick={() => { confirmClose(goToMainPage) }}></button>
        </div>
    )
}

export default StartPage;

//Create main modal window with confirm
function confirmClose(goToPage) {
    if (window.confirm("Do you want to go to MAIN page?")) goToPage();
}