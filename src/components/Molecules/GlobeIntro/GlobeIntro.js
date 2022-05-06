import React from "react";

import ExploreLogo from "../../../img/explore-the-garbage.svg";

import "./GlobeIntro.scss";

const GlobeIntro = () => {
    return (
        <div className="globe-intro">
            <img
                className="globe-intro__logo"
                src={ExploreLogo}
                alt="Explore the garbage logo"
            />
            <p className="globe-intro__text">
                Explore the interesting plastic finds of The Ocean Cleanup.
                Rotate the globe to select the different locations and find out
                what was found in that location.
            </p>
        </div>
    );
};

export default GlobeIntro;
