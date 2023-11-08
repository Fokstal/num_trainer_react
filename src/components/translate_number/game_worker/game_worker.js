import React, { useEffect, useState, useRef } from 'react';
import "./game_worker.css"

import Popup from '@common/popup/popup';
import Timer from '@components/timer/timer';
import LifeBar from './life_bar/life_bar';

import { correctRespCharLayout, delay, incorrectRespCharLayout } from '../../../service/constants';
import useKeyPress from "../../../service/useKeyPress"

let timer = null;
const baseTimerValue = 110;

//Check saved shorts by use PRESS KEY
function GameWorker({ numbersToWords, gameSettings }) {
    const numbersToTranslate = Array.from(numbersToWords.keys());
    const wordsTranslate = Array.from(numbersToWords.values());

    const [popupSettings, setPopupSettings] = useState({
        message: "",
        isShow: false
    });

    const [isPlayTime, setIsTime] = useState(gameSettings.isPlayTime);
    const [isPlayLife, setIsLife] = useState(gameSettings.isPlayLife);

    const [gameState, setGameState] = useState({
        correctAnswersCount: 0,
        currentQuestionPosition: 0,
        userResponse: "",
        currentTimerValue: 100,
        currentLifeCount: 3
    })

    const { correctAnswersCount, currentQuestionPosition, userResponse } = gameState;

    const [timerValue, setTime] = useState(baseTimerValue);
    const [lifeCount, setLives] = useState(3);

    let answerBoxRef = useRef(null);

    function stopGame() {
        answerBoxRef.current.disabled = 1;
        setIsTime(false);
    }
    
    const showPopupPerMs = (ms, message) => {
        setPopupSettings({
            message: message,
            isShow: true
        });

        delay(ms).then(() => setPopupSettings(prevPopupSettings => ({
            ...prevPopupSettings,
            isShow: false
        })));
    }

    const startCheckingResponse = () => {
        if (currentQuestionPosition < numbersToTranslate.length) {
            // Alarm! Trim maybe don't working with big numbers. Exmp: one hundred thirty-six (spaces between numbers must be deleted?)
            if (userResponse.toLowerCase().trim() === wordsTranslate[currentQuestionPosition]) {
                showPopupPerMs(1500, correctRespCharLayout)
                setTimeout(() => {
                    setGameState({
                        ...gameState,
                        currentQuestionPosition: gameState.currentQuestionPosition + 1,
                        correctAnswersCount: gameState.correctAnswersCount + 1,
                        userResponse: ""
                    });

                    setTime(baseTimerValue);
                }, 1500);
            } else {
                showPopupPerMs(2500, incorrectRespCharLayout);
            }
        } else {
            stopGame();
        }
    };

    useKeyPress("Enter", () => {startCheckingResponse()});

    //Rework TIMER and Life BAR
    useEffect(() => {
        if (isPlayTime) {
            timer = setInterval(() => {
                setTime(time => time - 1);
                if (timerValue === 0) {
                    clearInterval(timer);
                    if (isPlayLife) {
                        setLives(lives => lives - 1);
                        if (lifeCount < 2) {
                            alert('Вы потеряли все жизни!');
                            setIsLife(false);
                            stopGame();
                        }
                    }
                    if (currentQuestionPosition >= numbersToTranslate.length) {
                        stopGame();
                    }

                    setGameState({ ...gameState, currentQuestionPosition: gameState.currentQuestionPosition + 1 });
                    setTime(baseTimerValue);
                }
            }, 100);
        }

        return () => clearInterval(timer);
    }, [isPlayTime, isPlayLife, timerValue, lifeCount, currentQuestionPosition, numbersToTranslate.length, gameState]);

    return (
        <div className="question row justify-content-center">
            {isPlayTime && <Timer time={timerValue} />}
            {isPlayLife && <LifeBar currentLife={lifeCount} />}
            <div className='row'>
                <h1 >{numbersToTranslate[currentQuestionPosition]}</h1>
                <div className="popup-box">
                    {popupSettings.isShow && <Popup message={popupSettings.message} className="popup" />}
                </div>
            </div>
            <input
                ref={answerBoxRef}
                type="text"
                className="text col-12"
                id="answerBox"
                placeholder="Translate the number..."
                value={userResponse}
                onChange={(e) => setGameState({ ...gameState, userResponse: e.target.value })}
            />
            <button className="btn btn-dark col-3 my-4" onClick={startCheckingResponse}>
                Set
            </button>

            <div className="result-bar">
                <div className="progress col-12" style={{ height: "4px" }}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${100 / numbersToTranslate.length * (currentQuestionPosition - correctAnswersCount)}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: `${100 / numbersToTranslate.length * correctAnswersCount}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar bg-dark-subtle" role="progressbar" style={{ width: `${100 / numbersToTranslate.length * 1}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    );
}

export default GameWorker;
