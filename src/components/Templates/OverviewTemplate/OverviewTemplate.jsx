import React from "react";
import { Link } from "react-router-dom";

import ExploreLogo from "../../../img/explore-the-garbage.svg";
import DropdownIcon from "../../../img/dropdown-icon.svg";

import Navigation from "../../Atoms/Navigation/Navigation";
import ItemsGrid from "../../Atoms/ItemsGrid/ItemsGrid";

// import { itemsData } from "../../../data/itemsData";
import { itemsData } from "../../../data/itemsDataNice";

import "./OverviewTemplate.scss";

const OverviewTemplate = () => {
    return (
        <div className="overview-template">
            <div className="overview-template__navigation">
                <Link to="/" className="overview-template__home-logo">
                    <img
                        className="overview-template__home-image"
                        src={ExploreLogo}
                        alt=""
                    />
                </Link>
                <Navigation />
            </div>

            <section className="overview-template__content">
                <div className="overview-template__title-container">
                    <h2 className="overview-template__title">
                        The entire collection
                    </h2>
                    <div className="overview-template__filter-container">
                        <ul className="overview-template__filter-list">
                            <li className="overview-template__filter-item">
                                Filter
                                <span className="overview-template__dropdown-icon">
                                    <img src={DropdownIcon}></img>
                                </span>
                            </li>
                        </ul>
                        <ul className="overview-template__filter-list">
                            <li>
                                Sort
                                <span className="overview-template__dropdown-icon">
                                    <img src={DropdownIcon}></img>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <ItemsGrid items={itemsData} size="big" page="overview" />
            </section>
        </div>
    );
};

export default OverviewTemplate;
