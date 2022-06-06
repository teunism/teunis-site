import React, { useContext } from "react";

import { activeFilterContext } from "../../../App";

import BlueCross from "../../../img/icons/cross-blue.svg";

import "./ActiveFilterTags.scss";

const ActiveFilterTags = () => {
    const { activeFilter, setActiveFilter } = useContext(activeFilterContext);
    return (
        <ul className="active-filter-tags">
            {Object.keys(activeFilter.filters).map((key, index) => (
                <li
                    className="active-filter-tags__tag"
                    key={`active-filter-tag-${index}`}
                >
                    <button
                        className="active-filter-tags__button"
                        onClick={(e) => {
                            setActiveFilter((currentState) => {
                                const copy = { ...currentState };
                                delete copy.filters[key];
                                return copy;
                            });
                        }}
                    >
                        {`${key}: ${activeFilter.filters[key]}`}
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
