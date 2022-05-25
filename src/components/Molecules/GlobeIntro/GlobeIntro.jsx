import React from "react";

import ExploreLogo from "../../../img/explore-the-garbage.svg";

import "./GlobeIntro.scss";

const GlobeIntro = ({page}) => {
    return (
        <div className="globe-intro">
            <img
                className="globe-intro__logo"
                src={ExploreLogo}
                alt="Explore the garbage logo"
            />

            {page === "globe" ? (
                <p className="globe-intro__text">
                    Trash or treasure? Explore some of the strangest items that The Ocean Cleanup crew recovered during the plastic cleanup. 
                    Spin the globe and view all the locations where our crew is actively cleaning up the trash. 

                    {/* Explore the interesting plastic items of The Ocean Cleanup.
                    Rotate the globe to select the different locations and find out
                    what was found there. */}
                </p>
            ) : (
                <p className="globe-intro__text">
                    View the complete collection of the strangest items of The Ocean Cleanup. 
                    Use the filter and sort dropdowns to explore the collection in multiple ways. 
                </p>
            )}
        </div>
    );
};

export default GlobeIntro;
