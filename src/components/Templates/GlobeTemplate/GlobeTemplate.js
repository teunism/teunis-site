import React from "react";
import { Link } from "react-router-dom";

import GlobeIntro from "../../Molecules/GlobeIntro/GlobeIntro";
import Globe from "../../Molecules/Globe/Globe";
import GlobeOverlay from "../../Molecules/GlobeOverlay/GlobeOverlay";

import "./GlobeTemplate.scss";

const GlobeTemplate = () => {
    const mobileScreen = window.innerWidth < 640;
    const classes = mobileScreen
        ? "globe-template globe-template--mobile"
        : "globe-template";

    return (
        <>
            <nav class="globe-template__overview-link">
                <Link to="overview">
                    <p>yo</p>
                </Link>
            </nav>
            <section className={classes}>
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
