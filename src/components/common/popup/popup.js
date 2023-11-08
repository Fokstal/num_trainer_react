import React, { useState, useEffect } from "react";
import "./popup.css"


function Popup({ message }) {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div className={`popup-wnd ${show ? 'show' : ''}`}>
            <p className="popup-message">{message}</p>
        </div>
    )
}

export default Popup;