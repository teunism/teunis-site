import React from "react";

import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./utils/ScrollToTop";

import HomeTemplate from "./components/Templates/HomeTemplate/HomeTemplate";

import "App.scss";

export const filterIsOpenContext = React.createContext();

const App = () => {
    // this is filterIsOpen Context
    // const [filterIsOpen, setFilterIsOpen] = useState(false);

    return (
        <div className="app">
            {/* <filterIsOpenContext.Provider
                value={{ filterIsOpen, setFilterIsOpen }}
            > */}
            <ScrollToTop>
                <Routes>
                    <Route path="/" exact element={<HomeTemplate />} />
                </Routes>
            </ScrollToTop>
            {/* </filterIsOpenContext.Provider> */}
        </div>
    );
};

export default App;
