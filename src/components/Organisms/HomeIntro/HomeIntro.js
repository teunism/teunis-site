import React from "react";

import GlobeIntro from "../../Molecules/GlobeIntro/GlobeIntro";
import Globe from "../../Molecules/Globe/Globe";

import "./HomeIntro.scss";

const HomeIntro = () => {
    return (
        <section className="home-intro">
            <GlobeIntro className="home-intro__globe-intro" />
            <Globe className="home-intro__globe" />
        </section>
    );
};

export default HomeIntro;
