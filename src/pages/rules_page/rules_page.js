import React from "react";
import { Outlet, useNavigate } from 'react-router-dom';

const RulesPage = () => {
    const navigateTo = useNavigate();

    return (
        <div className="rules-page">
            <span>
                Very many words Very many words Very many words Very many words Very many words
                Very many words Very many words Very many words Very many words Very many words
                Very many words Very many words Very many words Very many words Very many words
                Very many words Very many words Very many words Very many words Very many words
                Very many words Very many words Very many words Very many words Very many words
            </span>
            <button className="btn-rules btn btn-outline-secondary" onClick={() => navigateTo("*", { replace: false })}>
                MainPage
            </button>
            <Outlet/>
        </div>
    )
}

export default RulesPage;