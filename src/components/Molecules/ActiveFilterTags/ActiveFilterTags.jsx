import React, { useContext } from "react";

import { activeFilterContext } from "../../../App";

import BlueCross from "../../../img/icons/cross-blue.svg";

import "./ActiveFilterTags.scss";

const ActiveFilterTags = () => {
    const { activeFilter, setActiveFilter } = useContext(activeFilterContext);
    console.log(activeFilter);

    return (
        <ul className="active-filter-tags">
            {Object.keys(activeFilter).map((key, index) => (
                <li
                    className="active-filter-tags__tag"
                    key={`active-filter-tag-${index}`}
                >
                    <button className="active-filter-tags__button">
                        {`${key}: ${activeFilter[key]}`}
                        <img
                            className="active-filter-tags__icon"
                            src={BlueCross}
                            alt=""
                        />
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ActiveFilterTags;
