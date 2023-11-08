import React, { useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom';

import "./start_page.css"

import SelectPreset from "@components/select_preset/select_preset";
import TranslateNumber from "@components/translate_number/translate_number";
import useKeyPress from "@service/useKeyPress";

//Trash
let navigateToGbl = null;

const StartPage = ({ goToMainPage }) => {
    const navigateTo = useNavigate();

    navigateToGbl = navigateTo;

    const [page, setPage] = useState("select_preset");
    const [gameSettings, setData] = useState({});

    const goToSelectPresetPage = () => setPage("select_preset");
    const goToTranslateNumberPage = (value) => {
        setPage("translate_number");
        setData(value);
    }

    useKeyPress("Escape", () => { confirmNavigateToMainPage(goToMainPage); })

    return (
        <div className="start-page">
            {page === "select_preset" && <SelectPreset goToTranslateNumberPage={goToTranslateNumberPage} />}
            {page === "translate_number" && <TranslateNumber gameSettings={gameSettings} goToSelectPresetPage={goToSelectPresetPage} />}
            <button className="btn-close btn btn-outline-dark m-4 mx-auto d-block" style={{ fontSize: ".8rem" }} onClick={() => { confirmNavigateToMainPage(); }}></button>
            <Outlet />
        </div>
    )
}

export default StartPage;

//Create main modal window with confirm
function confirmNavigateToMainPage() {
    if (window.confirm("Do you want to go to MAIN page?") && navigateToGbl !== null) navigateToGbl("*", { replace: false });
}