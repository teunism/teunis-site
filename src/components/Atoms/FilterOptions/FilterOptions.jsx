import React, { useContext, useState } from "react";

import { filterIsOpenContext } from "../../../App";

import DropDownIcon from "../../../img/icons/dropdown-icon.svg";

import "./FilterOptions.scss";

const FilterOptions = ({ filter }) => {
    const { filterIsOpen, setFilterIsOpen } = useContext(filterIsOpenContext);

    const [optionsVisible, setOptionsVisible] = useState(false);

    const classes = optionsVisible
        ? "filter-options__list filter-options__list--open"
        : "filter-options__list";

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <>
            <div
                className="filter-options__title-container"
                onClick={(e) => {
                    setOptionsVisible(!optionsVisible);
                }}
            >
                <h3 className="filter-options__title">
                    {capitalizeFirstLetter(filter.category)}
                </h3>
                <img src={DropDownIcon} alt="" />
            </div>
            <ul className={classes}>
                {filter.options.map((option) => (
                    <li className="filter-options__item">
                        {capitalizeFirstLetter(option)}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default FilterOptions;
