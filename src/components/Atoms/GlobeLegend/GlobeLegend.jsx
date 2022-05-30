import React from "react";

import GreenCircle from "../../../img/icons/green-circle.svg";
import BlueCircle from "../../../img/icons/blue-circle.svg";
import BorderCircle from "../../../img/icons/border-circle.svg";

import "./GlobeLegend.scss";

const GlobeLegend = () => {
    return (
        <div className="globe-legend">
            <ul className="globe-legend__list">
                <li className="globe-legend__list-item">
                    <img
                        className="globe-legend__image"
                        src={GreenCircle}
                        alt=""
                    />
                    <span className="globe-legend__text">River</span>
                </li>
                <li className="globe-legend__list-item">
                    <img
                        className="globe-legend__image"
                        src={BlueCircle}
                        alt=""
                    />
                    <span className="globe-legend__text">Ocean</span>
                </li>
                <li className="globe-legend__list-item">
                    <img
                        className="globe-legend__image"
                        src={BorderCircle}
                        alt=""
                    />
                    <span className="globe-legend__text">Selected</span>
                </li>
            </ul>
        </div>
    );
};

export default GlobeLegend;
