import React, { useContext } from "react";

import { locationData, patchesData } from "../../../data/patches";
import nextButton from "../../../img/button-next.svg";
import previousButton from "../../../img/button-previous.svg";

import { ActivePatchContext } from "../../../App";

import OverlayGrid from "../../Atoms/OverlayGrid/OverlayGrid";

import "./GlobeOverlay.scss";

const GlobeOverlay = () => {
    const { activePatch } = useContext(ActivePatchContext);

    const patch =
        locationData.find((location) => location.name == activePatch) ||
        locationData[0];

    return (
        <section className="globe-overlay">
            <div className="globe-overlay__text">
                <div className="globe-overlay__title-container">
                    <button className="globe-overlay__button">
                        <img src={previousButton} alt="" />
                    </button>
                    <h2 className="globe-overlay__title">{patch.title}</h2>
                    <button className="globe-overlay__button">
                        <img src={nextButton} alt="" />
                    </button>
                </div>
                <p className="globe-overlay__sub-title">Found items</p>
            </div>

            <div className="globe-overlay__items">
                <OverlayGrid items={patch.items} />
            </div>
        </section>
    );
};

export default GlobeOverlay;
