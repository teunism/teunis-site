import React from "react";

import BlueCross from "../../../img/icons/cross-blue.svg";

import "./ActiveFilterTags.scss";

const ActiveFilterTags = () => {
    return (
        <ul className="active-filter-tags">
            <li className="active-filter-tags__tag">
                <button className="active-filter-tags__button">
                    Color: Blue{" "}
                    <img
                        className="active-filter-tags__icon"
                        src={BlueCross}
                        alt=""
                    />
                </button>
            </li>
            <li className="active-filter-tags__tag">
                <button className="active-filter-tags__button">
                    Material: Plastic{" "}
                    <img
                        className="active-filter-tags__icon"
                        src={BlueCross}
                        alt=""
                    />
                </button>
            </li>
        </ul>
    );
};

export default ActiveFilterTags;
