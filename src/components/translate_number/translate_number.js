import React, { useEffect, useState } from "react";
import "./translate_number.css"

import NumberWorker from "@service/number_worker.js"
import GameWorker from "./game_worker/game_worker.js";

const TranslateNumber = ({ goToSelectPresetPage, gameSettings }) => {
    const { countNumber, difficult } = gameSettings.presetSetting;
    const numbersToWords = NumberWorker.generateNumberMap(countNumber, difficult);

    const [isStartLogo, setIsStartLogo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsStartLogo(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [isStartLogo]);

    return (
        <div className="translate-number slide-from-right">
            <div className="game text-center">
                {isStartLogo ? <StartGame /> : <GameWorker numbersToWords={numbersToWords} gameSettings={gameSettings} />}
            </div>

            <button className="btn-back-game btn btn-danger" onClick={() => { goToSelectPresetPage() }}>
                Back <i class="fa-solid fa-rotate-left"></i>
            </button>
        </div>
    )
}

const StartGame = () => {
    return (
        <div className="start-game">
            <h1>START</h1>
        </div>
    )
}

export default TranslateNumber;