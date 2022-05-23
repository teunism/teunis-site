import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import GlobeIntro from "../../Molecules/GlobeIntro/GlobeIntro";
import Globe from "../../Molecules/Globe/Globe";
import GlobeOverlay from "../../Molecules/GlobeOverlay/GlobeOverlay";

import "./GlobeTemplate.scss";

const GlobeTemplate = () => {
    const mobileScreen = window.innerWidth < 640;

    return (
        <>
            <nav class="globe-template__overview-link">
                <Link to="overview">
                    <div className="globe-template__overview-icon">
                        <div className="globe-template__overview-icon-inner"></div>
                        <div className="globe-template__overview-icon-inner"></div>
                        <div className="globe-template__overview-icon-inner"></div>
                        <div className="globe-template__overview-icon-inner"></div>
                    </div>
                </Link>
            </nav>
            <section className="globe-template">
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
