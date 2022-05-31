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
                Trash or treasure? Explore some of the strangest items that The
                Ocean Cleanup crew recovered during the plastic cleanup. Spin
                the globe and view all the locations where our crew is actively
                cleaning up the trash.
            </p>
        </div>
    );
};

export default GlobeIntro;
