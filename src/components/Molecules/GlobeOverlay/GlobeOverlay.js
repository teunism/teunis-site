import React, { useContext } from "react";

import { patchesData } from "../../../data/patches";

import { ActivePatchContext } from "../../../App";

import OverlayGrid from "../../Atoms/OverlayGrid/OverlayGrid";

import "./GlobeOverlay.scss";

const GlobeOverlay = () => {
    const { activePatch } = useContext(ActivePatchContext);
    const patch = patchesData[activePatch] || patchesData["pacific"];

    return (
        <section className="globe-overlay">
            <h2 className="globe-overlay__title">{patch.title}</h2>
            <p className="globe-overlay__sub-title">Found items</p>
            <div className="globe-overlay__items">
                <OverlayGrid items={patch.items} />
            </div>
        </section>
    );
};

export default GlobeOverlay;
