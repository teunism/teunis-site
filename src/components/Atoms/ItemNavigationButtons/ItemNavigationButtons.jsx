import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ArrowLeft from "../../../img/icons/arrow-left-white.svg";
import ArrowRight from "../../../img/icons/arrow-right-white.svg";

import { locationData } from "../../../data/patches";
import { activeFilterContext } from "../../../App";

import "./ItemNavigationButtons.scss";
import { itemsData } from "../../../data/itemsData";
// import { itemsData } from "../../../data/itemsDataNice";

const ItemNavigationButtons = ({ item, goTo }) => {
    const { activeFilter } = useContext(activeFilterContext);

    const activeLocationItems = locationData.find(
        (location) => location.name === item.location
    ).items;

    const filteredOverviewItems = Object.keys(activeFilter.filters).reduce(
        (all, cur) => {
            return all.filter(
                (item) =>
                    item.data.filterOptions[cur] == activeFilter.filters[cur]
            );
        },
        itemsData
    );

    const locationOrOverviewItems =
        goTo === "overview" ? filteredOverviewItems : activeLocationItems;

    const activeItemIndex = locationOrOverviewItems.findIndex(
        (locationItem) => locationItem === item
    );

    const previousItemIndex =
        activeItemIndex > 0
            ? activeItemIndex - 1
            : locationOrOverviewItems.length - 1;

    const nextItemIndex =
        activeItemIndex < locationOrOverviewItems.length - 1
            ? activeItemIndex + 1
            : 0;

    const previousItem = locationOrOverviewItems[previousItemIndex];
    const nextItem = locationOrOverviewItems[nextItemIndex];

    return (
        <div className="item-navigation-buttons">
            <Link
                to={{
                    pathname: `/${previousItem.url}`,
                    search: goTo,
                }}
            >
                <div className="item-navigation-buttons__button">
                    <img
                        className="item-navigation-buttons__icon"
                        src={ArrowLeft}
                        alt=""
                    />
                </div>
            </Link>
            <Link
                to={{
                    pathname: `/${nextItem.url}`,
                    search: goTo,
                }}
            >
                <div className="item-navigation-buttons__button">
                    <img
                        className="item-navigation-buttons__icon"
                        src={ArrowRight}
                        alt=""
                    />
                </div>
            </Link>
        </div>
    );
};

export default ItemNavigationButtons;
