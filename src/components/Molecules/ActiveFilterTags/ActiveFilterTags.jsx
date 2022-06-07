import React, { useContext, useEffect } from "react";

import { activeFilterContext } from "../../../App";

import BlueCross from "../../../img/icons/cross-blue.svg";

import "./ActiveFilterTags.scss";

const ActiveFilterTags = () => {
    const { activeFilter, setActiveFilter } = useContext(activeFilterContext);

    useEffect(() => {
        console.log(activeFilter);
    }, [activeFilter]);

    return (
        <ul className="active-filter-tags">
            {Object.keys(activeFilter.sort).map((key, index) => {
                return (
                    <li
                        className="active-filter-tags__tag"
                        key={`active-filter-tag-${index}`}
                    >
                        <button
                            className="active-filter-tags__button"
                            onClick={(e) => {
                                setActiveFilter((currentState) => {
                                    const copy = { ...currentState };
                                    delete copy.sort[key];
                                    return copy;
                                });
                            }}
                        >
                            {`${key}: ${activeFilter.sort[key]}`}
                            <img
                                className="active-filter-tags__icon"
                                src={BlueCross}
                                alt=""
                            />
                        </button>
                    </li>
                );
            })}

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
