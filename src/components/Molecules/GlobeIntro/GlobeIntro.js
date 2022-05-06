import React from "react";

import ExploreLogo from "../../../img/explore-the-garbage.svg";

import "./GlobeIntro.scss";

const GlobeIntro = () => {
    return (
        <div className="globe-intro">
            <img src={ExploreLogo} alt="Explore the garbage logo" />
            <p className="globe-intro__text">
                Explore the Garbage that is spread around the globe. Rotate the
                globe to see the many different locations The Ocean Cleanup is
                cleaning up. Click on different locations to see what items are
                found and get to know more about them. In case you know more
                about the item help The Ocean Cleanup and leave a comment to get
                pinned and be a part of the page!
            </p>
        </div>
    );
};

export default GlobeIntro;
