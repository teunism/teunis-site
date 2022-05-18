import React, { useContext, useEffect, useState } from "react";

import { locationData } from "../../../data/patches";
import nextButton from "../../../img/button-next.svg";
import previousButton from "../../../img/button-previous.svg";

import { ActivePatchContext } from "../../../App";

import OverlayGrid from "../../Atoms/OverlayGrid/OverlayGrid";

import "./GlobeOverlay.scss";

const GlobeOverlay = () => {
    const { activePatch, setActivePatch } = useContext(ActivePatchContext);

    const patch = locationData.find((location) => location.name == activePatch);

    const activePatchIndex = locationData.findIndex(
        (location) => location.name === activePatch
    );

    return (
        <section className="globe-overlay">
            <div className="globe-overlay__text">
                <div className="globe-overlay__title-container">
                    <button
                        className="globe-overlay__button"
                        onClick={(e) => {
                            const previousLocationIndex =
                                activePatchIndex > 0
                                    ? activePatchIndex - 1
                                    : locationData.length - 1;

                            setActivePatch(
                                locationData[previousLocationIndex].name
                            );
                        }}
                    >
                        <img src={previousButton} alt="" />
                    </button>
                    <h2 className="globe-overlay__title">{patch.title}</h2>
                    <button
                        className="globe-overlay__button"
                        onClick={(e) => {
                            const nextLocationIndex =
                                activePatchIndex < locationData.length - 1
                                    ? activePatchIndex + 1
                                    : 0;

                            setActivePatch(
                                locationData[nextLocationIndex].name
                            );
                        }}
                    >
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
