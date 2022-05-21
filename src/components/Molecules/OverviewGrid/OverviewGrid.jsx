import React, { useState } from "react";

import { itemsData } from "../../../data/itemsData";

import ItemsGrid from "../../Atoms/ItemsGrid/ItemsGrid";

import DropdownIcon from "../../../img/dropdown-icon.svg";

import "./OverviewGrid.scss";

const OverviewGrid = () => {
    return (
        <section className="overview-grid">
            <div className="overview-grid__title-container">
                <h2 className="overview-grid__title">View the Collection</h2>
                <div className="overview-grid__filter-container">
                    <ul className="overview-grid__filter-list">
                        <li className="overview-grid__filter-item">
                            Filter
                            <span className="overview-grid__dropdown-icon">
                                <img src={DropdownIcon}></img>
                            </span>
                        </li>
                    </ul>
                    <ul className="overview-grid__filter-list">
                        <li>
                            Sort
                            <span className="overview-grid__dropdown-icon">
                                <img src={DropdownIcon}></img>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <ItemsGrid items={itemsData} size="big" />
        </section>
    );
};

export default OverviewGrid;
