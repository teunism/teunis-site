import React, { useContext } from "react";

import { filterIsOpenContext } from "../../../App";

import CloseIcon from "../../../img/icons/cross.svg";
import FilterOptions from "../../Atoms/FilterOptions/FilterOptions";

import "./OverviewFilter.scss";

const OverviewFilter = () => {
    const { filterIsOpen, setFilterIsOpen } = useContext(filterIsOpenContext);

    const filterProperties = {
        category: ["Toys", "Technology", "Personal artifacts"],
        color: [],
        material: [],
    };

    const classes = filterIsOpen
        ? "overview-filter overview-filter--open"
        : "overview-filter";

    return (
        <section className={classes}>
            <button
                className="overview-filter__close-button"
                onClick={(e) => {
                    setFilterIsOpen(false);
                }}
            >
                <img
                    className="overview-filter__close-icon"
                    src={CloseIcon}
                    alt=""
                />
            </button>

            <h2 className="overview-filter__title">Filter</h2>
            <ul className="overview-filter__filter-list">
                <li className="overview-filter__filter-item overview-filter__filter-item--open">
                    <FilterOptions />
                </li>

                <li className="overview-filter__filter-item">
                    <FilterOptions />
                </li>

                <li className="overview-filter__filter-item">
                    <FilterOptions />
                </li>
            </ul>
        </section>
    );
};

export default OverviewFilter;
