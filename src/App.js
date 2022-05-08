import React, { createContext, useContext, useState } from "react";

import HomeIntro from "./components/Organisms/HomeIntro/HomeIntro";

import "App.scss";

export const ActivePatchContext = React.createContext("atlantic");

const App = () => {
    const [activePatch, setActivePatch] = useState();

    return (
        <div className="app">
            <ActivePatchContext.Provider
                value={{ activePatch, setActivePatch }}
            >
                <HomeIntro />
            </ActivePatchContext.Provider>
        </div>
    );
};

export default App;
