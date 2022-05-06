import React from "react";

import ExploreLogo from "../../img/explore-the-garbage.svg";

import "./GlobeIntro.scss";

const GlobeIntro = () => {
    return (
        <div className="globe-intro">
            <img src={ExploreLogo} alt="Explore the garbage logo" />
            <p>Hello</p>
        </div>
    );
};

export default GlobeIntro;
