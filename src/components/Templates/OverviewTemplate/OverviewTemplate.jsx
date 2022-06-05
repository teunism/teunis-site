import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { filterIsOpenContext } from "../../../App";
import { activeFilterContext } from "../../../App";

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
    const { activeFilter } = useContext(activeFilterContext);

    const classes = filterIsOpen
        ? "overview-template overview-template--filter-open"
        : "overview-template";

    const filterClasses = !!Object.keys(activeFilter).length
        ? "overview-template__filter-container overview-template__filter-container--under-title"
        : "overview-template__filter-container";

    const marginRightFilter = () => {
        if (window.screen.width < 750) {
            return "0px";
        }
        if (window.screen.width < 1600) {
            return "350px";
        }
        if (window.screen.width > 1600 + 350 * 2) {
            return "0px";
        }
        return `${(2300 - window.screen.width) / 2}px`;
    };

    return (
        <div className={classes}>
            <OverviewFilter />

            <div
                className="overview-template__content"
                style={filterIsOpen ? { marginRight: marginRightFilter() } : {}}
            >
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
                    <h2 className="overview-template__title">
                        The entire collection
                    </h2>

                    <div className={filterClasses}>
                        {!!Object.keys(activeFilter).length && (
                            <ActiveFilterTags />
                        )}

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

                    <ItemsGrid items={itemsData} size="big" page="overview" />
                </section>
            </div>
        </div>
    );
};

export default OverviewTemplate;
