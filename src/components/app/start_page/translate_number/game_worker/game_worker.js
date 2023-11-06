import React, { useEffect, useState, useRef } from 'react';
import "./game_worker.css"

import Popup from '../../../../popup/popup';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let timer = null;

function GameWorker({ numbersToWords, gameSettings }) {
    const [showPopup, setShowPopup] = useState(false);
    const [messagePopup, setMessagePopup] = useState("");
    const [isTime, setIsTime] = useState(gameSettings.isTime);
    const [isLife, setIsLife] = useState(gameSettings.isLife);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answer, setAnswer] = useState("");

    const [time, setTime] = useState(100);
    const [lives, setLives] = useState(3);

    let answerBoxRef = useRef(null);

    function stopGame() {
        answerBoxRef.current.disabled = 1;
        setIsTime(false);
    }

    useEffect(() => {
        if (isTime) {
            timer = setInterval(() => {
                setTime(time => time - 1);
                if (time === 0) {
                    clearInterval(timer);
                    if (isLife) {
                        setLives(lives => lives - 1);
                        if (lives < 2) {
                            alert('Вы потеряли все жизни!');
                            setIsLife(false);
                            stopGame();
                        }
                    }
                    if (currentQuestion >= numbers.length - 1) {
                        stopGame();
                    }
                    setCurrentQuestion(currentQuestion => currentQuestion + 1);
                    setTime(100);
                }
            }, 100);
        }

        return () => clearInterval(timer);
    }, [isTime, isLife, time, lives]);


    const showPopupPerMs = (ms, message) => {
        setMessagePopup(message);
        setShowPopup(true);

        delay(ms).then(() => setShowPopup(false));
    }

    const numbers = Array.from(numbersToWords.keys());
    const words = Array.from(numbersToWords.values());

    const checkCorrectAnswer = () => {
        if (answer === words[currentQuestion]) {
            setCorrectAnswers(correctAnswers + 1);
            setAnswer('');
            if (currentQuestion < numbers.length - 1) {
                showPopupPerMs(1500, <i class="fa-solid fa-check" style={{ color: "#4ec922" }}></i>)

                setTimeout(() => setCurrentQuestion(currentQuestion + 1), 1500);
                setTime(100);
            } else {
                stopGame();
            }
        } else {
            showPopupPerMs(2500, <i class="fa-solid fa-xmark" style={{ color: "#c92222" }}></i>);
        }
    };

    return (
        <div className="question row justify-content-center">
            {isTime && <Timer time={time} />}
            {isLife && <LifeBar currentLife={lives} />}
            <div className='row'>
                <h1 >{numbers[currentQuestion]}</h1>
                <div className="popup-box">
                    {showPopup && <Popup message={messagePopup} className="popup" />}
                </div>
            </div>
            <input
                ref={answerBoxRef}
                type="text"
                className="text col-12"
                id="answerBox"
                placeholder="Translate the number..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        checkCorrectAnswer();
                    }
                }}
            />
            <button className="btn btn-dark col-3 my-4" onClick={checkCorrectAnswer}>
                Set
            </button>
            <div className="result-bar">
                <div className="progress col-12" style={{ height: "10px" }}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${100 / numbers.length * (currentQuestion - correctAnswers)}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: `${100 / numbers.length * correctAnswers}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    <div className="progress-bar bg-dark-subtle" role="progressbar" style={{ width: `${100 / numbers.length * 1}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
    );
}

const Timer = ({ time }) => {
    return (
        <div className="timer">
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: `${time}%` }}></div>
            </div>
        </div>
    )
}

const LifeBar = ({ currentLife }) => {
    const lifes = [];

    for (let i = 0; i < currentLife; i++) {
        lifes.push(<i className="fa-regular fa-heart px-1" style={{ color: "red", fontSize: "2rem" }}></i>);
    }

    return (
        <div className='life-bar py-4'>
            {lifes}
        </div>
    )
}

export default GameWorker;
