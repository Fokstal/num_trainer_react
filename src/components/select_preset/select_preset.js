import React, { useState } from "react";
import "./select_preset.css"

import Preset from "./preset/preset";
import { presetSettingList } from "@service/constants"
import useKeyPress from "@service/useKeyPress";

const SelectPreset = ({ goToTranslateNumberPage }) => {

    const [gameSettings, setGameSettigns] = useState({
        presetSetting: null,
        separatorInTranslate: "-",
        isPlayTime: false,
        isPlayLife: false,
        isSeparatedByDot: true,
    });

    const { isPlayTime, isPlayLife, isSeparatedByDot } = gameSettings;

    function startGame(goToTranslateNumberPage) {
        if (gameSettings.presetSetting !== null) {
            goToTranslateNumberPage(gameSettings);
            return;
        }

        alert("Error! Select a preset.");
    }

    const handleSwitchChangeTime = (event) => {
        setGameSettigns(prevGameSettings => ({
            ...prevGameSettings,
            isPlayTime: event.target.checked
        }));
    }

    const handleSwitchChangeLife = (event) => {
        setGameSettigns(prevGameSettings => ({
            ...prevGameSettings,
            isPlayLife: event.target.checked
        }));
    }

    const handleSwitchChangeSeparatorDot = (event) => {
        setGameSettigns(prevGameSettings => ({
            ...prevGameSettings,
            isSeparatedByDot: event.target.checked
        }));
    }

    const handleSwitchSetSeparatorInTranslate = (event) => {
        setGameSettigns({ ...gameSettings, separatorInTranslate: event.target.getAttribute("data-separator") });
    }

    useKeyPress("Enter", () => { startGame(goToTranslateNumberPage); })

    return (
        <div className="select-preset move-from-bottom">
            <h1 className="select-preset-title" >Select the preset</h1>

            <div className="list-preset btn-group-vertical" role="group" aria-label="Basic radio toggle button group">
                {presetSettingList.map((presetSetting, index) => (
                    <Preset presetSetting={presetSetting} index={index} setGameSettigns={setGameSettigns} />
                ))}
            </div>

            <div className="preset-another-settings row justify-content-center">
                <p className="col-3">
                    <i class="fa-solid fa-circle-info"></i> Another settings:
                </p>
                <div class="form-check form-switch col-2">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckTime"
                        checked={isPlayTime} onChange={handleSwitchChangeTime} />
                    <label class="form-check-label" for="flexSwitchCheckTime">
                        Time <i class="fa-solid fa-stopwatch fa-xs fa-fade"></i>
                    </label>
                </div>
                <div class="form-check form-switch col-2">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckLife"
                        checked={isPlayLife} onChange={handleSwitchChangeLife} />
                    <label class="form-check-label" for="flexSwitchCheckLife">
                        Life <i class="fa-solid fa-heart-pulse fa-xs fa-beat"></i>
                    </label>
                </div>
                <div class="form-check form-switch col-2">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckSeparatedDot"
                        checked={isSeparatedByDot} onChange={handleSwitchChangeSeparatorDot} />
                    <label class="form-check-label" for="flexSwitchCheckSeparatedDot">
                        Separator <i class="fa-solid fa-object-ungroup"></i>
                    </label>
                </div>

                <p className="col-4">
                    <i class="fa-solid fa-circle-question"></i> Separator in translate
                </p>
                <div class="form-check col-2">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                        checked={gameSettings.separatorInTranslate === "-"}
                        onChange={handleSwitchSetSeparatorInTranslate} data-separator="-" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        sixty<span className="bg-warning rounded"> - </span>nine
                    </label>
                </div>
                <div class="form-check col-2 offset-1">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                        checked={gameSettings.separatorInTranslate === " "}
                        onChange={handleSwitchSetSeparatorInTranslate} data-separator=" " />
                    <label class="form-check-label" for="flexRadioDefault2">
                        sixty<span className="bg-warning rounded">&nbsp; &nbsp;</span>nine
                    </label>
                </div>
            </div>

            <button className="btn-start-game btn btn-success" onClick={() => { startGame(goToTranslateNumberPage); }}>
                <i class="fa-regular fa-circle-play"></i>
            </button>
        </div>
    )
}

export default SelectPreset;