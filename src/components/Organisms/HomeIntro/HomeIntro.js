import React from "react";

import GlobeIntro from "../../Molecules/GlobeIntro/GlobeIntro";
import Globe from "../../Molecules/Globe/Globe";
import GlobeOverlay from "../../Molecules/GlobeOverlay/GlobeOverlay";

import "./HomeIntro.scss";

const HomeIntro = () => {
    return (
        <section className="home-intro">
            <div className="home-intro__text">
                <GlobeIntro />
                <GlobeOverlay />
            </div>
            <div className="home-intro__globe-overlay">
                <Globe />
            </div>
        </section>
    );
};

export default HomeIntro;
