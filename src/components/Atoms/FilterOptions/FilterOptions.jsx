import React, { useContext, useState } from "react";

import { activeFilterContext } from "../../../App";

import DropDownIcon from "../../../img/icons/dropdown-icon.svg";

import "./FilterOptions.scss";

const FilterOptions = ({ filter, sort }) => {
    const { activeFilter, setActiveFilter } = useContext(activeFilterContext);
    const [optionsVisible, setOptionsVisible] = useState(false);

    const classes = optionsVisible
        ? "filter-options__list filter-options__list--open"
        : "filter-options__list";

    const filterOrSort = filter ? filter : sort;
    const filterOrSortString = filter ? "filters" : "sort";

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
                    {capitalizeFirstLetter(filterOrSort.category)}
                </h3>
                <img src={DropDownIcon} alt="" />
            </div>
            <ul className={classes}>
                {filterOrSort.options.map((option, index) => (
                    <li
                        className="filter-options__item"
                        key={`filter-option${index}`}
                        onClick={(e) => {
                            setActiveFilter({
                                ...activeFilter,
                                [filterOrSortString]: {
                                    ...activeFilter[filterOrSortString],
                                    [filterOrSort.category]: option,
                                },
                            });

                            console.log(activeFilter);
                        }}
                    >
                        {capitalizeFirstLetter(option)}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default FilterOptions;
