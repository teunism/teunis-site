import React from "react";
import { Link } from "react-router-dom";

import GlobeIntro from "../../Molecules/GlobeIntro/GlobeIntro";
import Globe from "../../Molecules/Globe/Globe";
import GlobeOverlay from "../../Molecules/GlobeOverlay/GlobeOverlay";

import "./GlobeTemplate.scss";

const GlobeTemplate = () => {
    return (
        <>
            <nav class="globe-template__overview-link">
                <Link to="overview">
                    <p>yo</p>
                </Link>
            </nav>
            <section className="globe-template">
                <div className="globe-template__text">
                    <GlobeIntro />
                    <GlobeOverlay />
                </div>
                <div className="globe-template__globe-overlay">
                    <Globe />
                </div>
            </section>
        </>
    );
};

export default GlobeTemplate;
