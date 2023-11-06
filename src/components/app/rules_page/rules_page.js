import React from "react";

const RulesPage = ({ goToMainPage }) => {
    return (
        <div className="rules-page">
            <span>
                Very many words Very many words Very many words Very many words Very many words
                Very many words Very many words Very many words Very many words Very many words
                Very many words Very many words Very many words Very many words Very many words
                Very many words Very many words Very many words Very many words Very many words
                Very many words Very many words Very many words Very many words Very many words
            </span>
            <button className="btn-rules btn btn-outline-secondary" onClick={goToMainPage}>
                MainPage
            </button>
        </div>
    )
}

export default RulesPage;