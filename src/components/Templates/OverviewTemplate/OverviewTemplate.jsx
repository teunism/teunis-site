import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { filterIsOpenContext } from "../../../App";

import ExploreLogo from "../../../img/explore-the-garbage.svg";
import FilterIcon from "../../../img/icons/filter-icon.svg";

import OverviewFilter from "../../Molecules/OverviewFilter/OverviewFilter";
import ActiveFilterTags from "../../Molecules/ActiveFilterTags/ActiveFilterTags";
import Navigation from "../../Atoms/Navigation/Navigation";
import ItemsGrid from "../../Atoms/ItemsGrid/ItemsGrid";

import { itemsData } from "../../../data/itemsData";
// import { itemsData } from "../../../data/itemsDataNice";

import "./OverviewTemplate.scss";

const OverviewTemplate = () => {
    const { filterIsOpen, setFilterIsOpen } = useContext(filterIsOpenContext);

    const classes = filterIsOpen
        ? "overview-template overview-template--filter-open"
        : "overview-template";

    return (
        <div className={classes}>
            <OverviewFilter />

            <div className="overview-template__content">
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

                <section className="overview-template__content-inner">
                    <div className="overview-template__title-container">
                        <h2 className="overview-template__title">
                            The entire collection
                        </h2>
                        <div className="overview-template__filter-container">
                            <ActiveFilterTags />
                            <button
                                className="overview-template__filter-button"
                                onClick={(e) => {
                                    setFilterIsOpen(true);
                                }}
                            >
                                Filter
                                <img
                                    className="overview-template__dropdown-icon"
                                    src={FilterIcon}
                                ></img>
                            </button>
                        </div>
                    </div>

                    <ItemsGrid items={itemsData} size="big" page="overview" />
                </section>
            </div>
        </div>
    );
};

export default OverviewTemplate;
