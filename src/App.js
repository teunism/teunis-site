import React, { createContext, useContext, useState } from "react";

import { Route, Routes } from "react-router-dom";

import GlobeTemplate from "./components/Templates/GlobeTemplate/GlobeTemplate";
import ItemDetailTemplate from "./components/Templates/ItemDetailTemplate/ItemDetailTemplate";
import OverviewTemplate from "./components/Templates/OverviewTemplate/OverviewTemplate";

import "App.scss";

export const ActivePatchContext = React.createContext();

const App = () => {
    const [activePatch, setActivePatch] = useState("pacific");

    return (
        <div className="app">
            <ActivePatchContext.Provider
                value={{ activePatch, setActivePatch }}
            >
                <Routes>
                    <Route path="/" exact element={<GlobeTemplate />} />
                    <Route
                        path="overview"
                        element={<OverviewTemplate />}
                    ></Route>
                    <Route path=":itemUrl" element={<ItemDetailTemplate />} />
                </Routes>
            </ActivePatchContext.Provider>
        </div>
    );
};

export default App;
