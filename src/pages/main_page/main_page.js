import React from "react";
import { Outlet, useNavigate } from 'react-router-dom';

import "./main_page.css"

const MainPage = () => {

    const navigateTo = useNavigate();

    return (
        <div className="main-page text-center">
            <div>
                <div className="logo-box">
                    <img src="/TN_Logo.jpg" alt="TN Logo" />
                </div>
                <div className="d-flex flex-column align-items-center">
                    <button className="btn-start btn btn-outline-success m-2" onClick={() => navigateTo("start", { replace: false })}>
                        Start
                    </button>
                    <button className="btn-rules btn btn-warning m-2" onClick={() => navigateTo("rules", { replace: false })}>
                        Rules
                    </button>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default MainPage;