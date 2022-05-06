import React from "react";
import ReactDom from "react-dom";
import "App.scss";
import Image from "./img/biggie.png";

const App = () => {
    return (
        <div>
            <h1 className="test">Hello Wordld</h1>
            <img src={Image} alt="" />
        </div>
    );
};

export default App;
