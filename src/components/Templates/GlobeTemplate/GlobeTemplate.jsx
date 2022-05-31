import React from "react";

import GlobeIntro from "../../Molecules/GlobeIntro/GlobeIntro";
import Globe from "../../Molecules/Globe/Globe";
import GlobeOverlay from "../../Molecules/GlobeOverlay/GlobeOverlay";
import Navigation from "../../Atoms/Navigation/Navigation";
import DisabledGlobe from "../../Atoms/DisabledGlobe/DisabledGlobe";

import "./GlobeTemplate.scss";

const GlobeTemplate = () => {
    const mobileScreen = window.innerWidth < 640;

    return (
        <>
            <section className="globe-template">
                <div className="globe-template__navigation">
                    <Navigation icon={"overview"} />
                </div>
                {!mobileScreen ? (
                    <>
                        <div className="globe-template__text">
                            <GlobeIntro />
                            <GlobeOverlay />
                        </div>
                        <div className="globe-template__globe-container">
                            <Globe />
                        </div>
                    </>
                ) : (
                    <>
                        <GlobeIntro />
                        <div className="globe-template__globe-container">
                            <DisabledGlobe />
                            <Globe />
                        </div>
                        <GlobeOverlay />
                    </>
                )}
            </section>
        </>
    );
};

export default GlobeTemplate;
