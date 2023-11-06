import React, { useState } from "react";

import MainPage from "./main_page/main_page";
import RulesPage from "./rules_page/rules_page";
import StartPage from "./start_page/start_page";

const App = () => {

    const [page, setPage] = useState("main");
    const [key, setKey] = useState(0);

    const goToMainPage = () => setPage("main");
    const goToRulesPage = () => setPage("rules");
    const goToStartPage = () => {
        setPage("start");
        setKey(prevKey => prevKey + 1);
    }

    return (
        <div className="app mt-2">
            {page === "main" && <MainPage goToStartPage={goToStartPage} goToRulesPage={goToRulesPage} />}
            {page === "start" && <StartPage key={key} goToMainPage={goToMainPage} />}
            {page === "rules" && <RulesPage goToMainPage={goToMainPage} />}
        </div>
    )
}

export default App;
