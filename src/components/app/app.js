import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "@pages/main_page/main_page";
import RulesPage from "@pages/rules_page/rules_page";
import StartPage from "@pages/start_page/start_page";

const App = () => {

    return (
        <div className="app mt-2">
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<MainPage />} />
                    <Route path="start" element={<StartPage />} />
                    <Route path="rules" element={<RulesPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
