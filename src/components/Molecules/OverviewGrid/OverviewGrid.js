import React, { useState } from "react";

import { itemsData } from "../../../data/itemsData";

import ItemsGrid from "../../Atoms/ItemsGrid/ItemsGrid";

import "./OverviewGrid.scss";

const OverviewGrid = () => {
    return (
        <section className="overview-grid">
            <div>
                <h2>View the Collection</h2>
                <ul>
                    <li>Filter</li>
                </ul>
                <ul>
                    <li>Sort</li>
                </ul>
            </div>

            <ItemsGrid items={itemsData} size="big" />
        </section>
    );
};

export default OverviewGrid;
