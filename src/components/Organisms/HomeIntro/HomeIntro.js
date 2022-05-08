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
            <Globe />
        </section>
    );
};

export default HomeIntro;
