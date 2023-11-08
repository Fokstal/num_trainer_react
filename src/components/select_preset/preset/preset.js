import React from "react";
import "./preset.css"

import useKeyPress from "@service/useKeyPress";

const Preset = ({ presetSetting, index, setGameSettigns }) => {
    const { difficult, name, countNumber } = presetSetting;

    let currentId = "btnRadioPreset" + index;

    const stars = [];

    for (let i = 0; i < difficult; i++) {
        stars.push(<i className="fa-regular fa-star" style={{ color: "#d99f20" }}></i>);
    }

    if (stars.length === 0) {
        stars.push(<i class="fa-regular fa-star-half-stroke" style={{ color: "#af1d9c" }}></i>);
    }

    useKeyPress(`${index + 1}`, () => {
        document.querySelector(`#btnRadioPreset${index}`).click();
    });

    return (
        <div className="preset container p-2">
            <input type="radio" class="btn-check" name="btnRadioPreset" id={currentId} autocomplete="off" onClick={() => { setGameSettigns(prevGameSettings => ({...prevGameSettings, presetSetting: presetSetting})) }}></input>
            <label class="btn btn-outline-dark" for={currentId}>
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

export default Preset;