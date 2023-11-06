import React, { useState } from "react";
import "./select_preset.css"

const SelectPreset = ({ goToTranslateNumberPage }) => {

    const [isPlayTime, changeIsPlayTime] = useState(false);
    const [isPlayLife, changeIsPlayLife] = useState(false);
    const [currentPresetSetting, setCurrentPresetSetting] = useState(null);

    const listPresetSetting = [
        {
            difficult: 1,
            name: "Easy",
            countNumber: 20
        },
        {
            difficult: 2,
            name: "Medium",
            countNumber: 20
        },
        {
            difficult: 3,
            name: "Hard",
            countNumber: 30
        },
        {
            difficult: -1,
            name: "Mix",
            countNumber: 30
        },
    ];
    
    function startGame(isPlayTime, isPlayLife, goToGuessNumberPage) {
        if (currentPresetSetting !== null) {
            let gameSettings = {
                preset: currentPresetSetting,
                isTime: isPlayTime,
                isLife: isPlayLife
            }
    
            goToGuessNumberPage(gameSettings);
    
            return;
        }
    
        alert("Error! Select a preset.");
    }

    const handleSwitchChangeTime = (event) => {
        changeIsPlayTime(event.target.checked);
    }

    const handleSwitchChangeLife = (event) => {
        changeIsPlayLife(event.target.checked);
    }

    return (
        <div className="select-preset move-from-bottom">
            <h1 className="select-preset-title" >Select the preset</h1>

            <div className="list-preset btn-group-vertical" role="group" aria-label="Basic radio toggle button group">
                {listPresetSetting.map((presetSetting, index) => (
                    <Preset presetSetting={presetSetting} index={index} setCurrentPresetSetting={setCurrentPresetSetting}/>
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
            </div>

            <button className="btn-start-game btn btn-success" onClick={() => { startGame(isPlayTime, isPlayLife, goToTranslateNumberPage); }}>
                <i class="fa-regular fa-circle-play"></i>
            </button>
        </div>
    )
}

const Preset = ({ presetSetting, index, setCurrentPresetSetting }) => {
    const { difficult, name, countNumber } = presetSetting;

    let currentId = "btnRadioPreset" + index;

    const stars = [];

    for (let i = 0; i < difficult; i++) {
        stars.push(<i className="fa-regular fa-star" style={{ color: "#d99f20" }}></i>);
    }

    if (stars.length === 0) {
        stars.push(<i class="fa-regular fa-star-half-stroke" style={{ color: "#af1d9c" }}></i>);
    }

    return (
        <div className="preset container p-2">
            <input type="radio" class="btn-check" name="btnRadioPreset" id={currentId} autocomplete="off"></input>
            <label class="btn btn-outline-dark" for={currentId} onClick={() => {setCurrentPresetSetting(presetSetting)}}>
                <div className="row">
                    <span className="col-3">
                        {stars}
                    </span>
                    <span className="col-3">
                        {countNumber} <i class="fa-solid fa-w"></i>
                    </span>
                    <span className="col-4">
                        {name}
                    </span>
                </div>
            </label>
        </div>
    )
}

export default SelectPreset;