import React from "react";

import OverlayGrid from "../../Atoms/OverlayGrid/OverlayGrid";

import "./GlobeOverlay.scss";

const GlobeOverlay = () => {
    return (
        <section className="globe-overlay">
            <h2 className="globe-overlay__title">Atlantic Patch</h2>
            <p className="globe-overlay__sub-title">Found items</p>
            <OverlayGrid />
        </section>
    );
};

export default GlobeOverlay;
