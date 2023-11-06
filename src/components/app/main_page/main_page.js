import React from "react";
import "./main_page.css"

const MainPage = ({ goToStartPage, goToRulesPage }) => {

    return (
            <div className="main-page text-center">
                <div>
                    <div className="logo-box">
                        <img src="/TN_Logo.jpg" alt="TN Logo" />
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <button className="btn-start btn btn-outline-success m-2" onClick={goToStartPage}>
                            Start
                        </button>
                        <button className="btn-rules btn btn-warning m-2" onClick={goToRulesPage}>
                            Rules
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default MainPage;