import React, { createContext, useContext, useState } from "react";

import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./utils/ScrollToTop";

import GlobeTemplate from "./components/Templates/GlobeTemplate/GlobeTemplate";
import ItemDetailTemplate from "./components/Templates/ItemDetailTemplate/ItemDetailTemplate";
import OverviewTemplate from "./components/Templates/OverviewTemplate/OverviewTemplate";

import "App.scss";

export const ActivePatchContext = React.createContext();
export const filterIsOpenContext = React.createContext();

const App = () => {
    const [activePatch, setActivePatch] = useState("pacific");
    const [filterIsOpen, setFilterIsOpen] = useState(false);
    return (
        <div className="app">
            <filterIsOpenContext.Provider
                value={{ filterIsOpen, setFilterIsOpen }}
            >
                <ActivePatchContext.Provider
                    value={{ activePatch, setActivePatch }}
                >
                    <ScrollToTop>
                        <Routes>
                            <Route path="/" exact element={<GlobeTemplate />} />
                            <Route
                                path="overview"
                                element={<OverviewTemplate />}
                            />
                            <Route
                                path=":itemUrl"
                                element={
                                    <ItemDetailTemplate previousPage={this} />
                                }
                            />
                        </Routes>
                    </ScrollToTop>
                </ActivePatchContext.Provider>
            </filterIsOpenContext.Provider>
        </div>
    );
};

export default App;
