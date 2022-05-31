import React from "react";
import { Link } from "react-router-dom";

import ArrowLeft from "../../../img/icons/arrow-left-white.svg";
import ArrowRight from "../../../img/icons/arrow-right-white.svg";

import { locationData } from "../../../data/patches";

import "./ItemNavigationButtons.scss";
import { itemsData } from "../../../data/itemsData";

const ItemNavigationButtons = ({ item, goTo }) => {
    const activeLocationItems = locationData.find(
        (location) => location.name === item.location
    ).items;

    const locationOrAllItems =
        goTo === "overview" ? itemsData : activeLocationItems;

    const activeItemIndex = locationOrAllItems.findIndex(
        (locationItem) => locationItem === item
    );

    console.log(goTo);

    const previousItemIndex =
        activeItemIndex > 0
            ? activeItemIndex - 1
            : locationOrAllItems.length - 1;

    const nextItemIndex =
        activeItemIndex < locationOrAllItems.length - 1
            ? activeItemIndex + 1
            : 0;

    const previousItem = locationOrAllItems[previousItemIndex];
    const nextItem = locationOrAllItems[nextItemIndex];

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
