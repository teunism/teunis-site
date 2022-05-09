import React, { createContext, useContext, useState } from "react";

import { Route, Routes } from "react-router-dom";

import HomeIntro from "./components/Templates/HomeIntro/HomeIntro";
import ItemDetails from "./components/Templates/ItemDetails/ItemDetails";

import "App.scss";

export const ActivePatchContext = React.createContext("atlantic");

const App = () => {
    const [activePatch, setActivePatch] = useState();
    return (
        <div className="app">
            <ActivePatchContext.Provider
                value={{ activePatch, setActivePatch }}
            >
                <Routes>
                    <Route path="/" exact element={<HomeIntro />} />
                    <Route path="item/:itemUrl" element={<ItemDetails />} />
                </Routes>
            </ActivePatchContext.Provider>
        </div>
    );
};

export default App;
