import React from "react";

const Timer = ({ time }) => {
    return (
        <div className="timer">
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${time}%` }}></div>
            </div>
        </div>
    )
}

export default Timer