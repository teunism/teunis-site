import React from "react";

import GlobeIntro from "../../Molecules/GlobeIntro/GlobeIntro";
import Globe from "../../Molecules/Globe/Globe";

import "./HomeIntro.scss";

const HomeIntro = () => {
    return (
        <section className="home-intro">
            <GlobeIntro />
            <Globe />
        </section>
    );
};

export default HomeIntro;
