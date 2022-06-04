import React, { useContext, useState } from "react";

import { filterIsOpenContext } from "../../../App";

import DropDownIcon from "../../../img/icons/dropdown-icon.svg";

import "./FilterOptions.scss";

const FilterOptions = () => {
    const { filterIsOpen, setFilterIsOpen } = useContext(filterIsOpenContext);

    const [optionsVisible, setOptionsVisible] = useState(false);

    const classes = optionsVisible
        ? "filter-options__list filter-options__list--open"
        : "filter-options__list";

    return (
        <>
            <div
                className="filter-options__title-container"
                onClick={(e) => {
                    setOptionsVisible(!optionsVisible);
                }}
            >
                <h3 className="filter-options__title">Category</h3>
                <img src={DropDownIcon} alt="" />
            </div>
            <ul className={classes}>
                <li className="filter-options__item">Toys</li>
                <li className="filter-options__item">Technology</li>
                <li className="filter-options__item">Personal artifacts</li>
            </ul>
        </>
    );
};

export default FilterOptions;
