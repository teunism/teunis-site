import React from "react";

import CloseIcon from "../../../img/icons/cross.svg";
import DropDownIcon from "../../../img/icons/dropdown-icon.svg";

import "./OverviewFilter.scss";

const OverviewFilter = () => {
    const filterProperties = {
        category: ["Toys", "Technology", "Personal artifacts"],
        color: [],
        material: [],
    };
    return (
        <section className="overview-filter">
            <button className="overview-filter__close-button">
                <img
                    className="overview-filter__close-icon"
                    src={CloseIcon}
                    alt=""
                />
            </button>

            <h2 className="overview-filter__title">Filter</h2>
            <ul className="overview-filter__filter-list">
                <li className="overview-filter__filter-item">
                    <div className="overview-filter__filter-title-container">
                        <h3 className="overview-filter__filter-title">
                            Category
                        </h3>
                        <img src={DropDownIcon} alt="" />
                    </div>
                    <ul className="overview-filter__filter-options">
                        <li className="overview-filter__filter-option">Toys</li>
                        <li className="overview-filter__filter-option">
                            Technology
                        </li>
                        <li className="overview-filter__filter-option">
                            Personal artifacts
                        </li>
                    </ul>
                </li>
                <li className="overview-filter__filter-item">
                    <div className="overview-filter__filter-title-container">
                        <h3 className="overview-filter__filter-title">Color</h3>
                        <img src={DropDownIcon} alt="" />
                    </div>
                    <ul className="overview-filter__filter-options">
                        <li className="overview-filter__filter-option">Blue</li>
                        <li className="overview-filter__filter-option">
                            Yellow
                        </li>
                        <li className="overview-filter__filter-option">
                            Brown
                        </li>
                    </ul>
                </li>
                <li className="overview-filter__filter-item">
                    <div className="overview-filter__filter-title-container">
                        <h3 className="overview-filter__filter-title">
                            Material
                        </h3>
                        <img src={DropDownIcon} alt="" />
                    </div>
                    <ul className="overview-filter__filter-options">
                        <li className="overview-filter__filter-option">
                            Plastic
                        </li>
                        <li className="overview-filter__filter-option">
                            Glass
                        </li>
                        <li className="overview-filter__filter-option">Wood</li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};

export default OverviewFilter;
