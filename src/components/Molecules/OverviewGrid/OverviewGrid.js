import React, { useState } from "react";

import { itemsData } from "../../../data/itemsData";

import ItemsGrid from "../../Atoms/ItemsGrid/ItemsGrid";

import "./OverviewGrid.scss";

const OverviewGrid = () => {
    return (
        <section className="overview-grid">
            <div className="overview-grid__title-container">
                <h2 className="overview-grid__title">View the Collection</h2>
                <ul className="overview-grid__condition-list">
                    <li>Filter</li>
                </ul>
                <ul className="overview-grid__condition-list">
                    <li>Sort</li>
                </ul>
            </div>

            <ItemsGrid items={itemsData} size="big" />
        </section>
    );
};

export default OverviewGrid;
