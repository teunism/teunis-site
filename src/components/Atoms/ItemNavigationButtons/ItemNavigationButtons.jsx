import React from "react";
import { Link } from "react-router-dom";

import ArrowLeft from "../../../img/icons/arrow-left-white.svg";
import ArrowRight from "../../../img/icons/arrow-right-white.svg";

import { locationData } from "../../../data/patches";

import "./ItemNavigationButtons.scss";

const ItemNavigationButtons = ({ item }) => {
    const activeLocationItems = locationData.find(
        (location) => location.name === item.location
    ).items;

    const activeItemIndex = activeLocationItems.findIndex(
        (locationItem) => locationItem === item
    );

    const previousItemIndex =
        activeItemIndex > 0
            ? activeItemIndex - 1
            : activeLocationItems.length - 1;

    const nextItemIndex =
        activeItemIndex < activeLocationItems.length - 1 ? activeItemIndex + 1 : 0;

    const previousItem = activeLocationItems[previousItemIndex];
    const nextItem = activeLocationItems[nextItemIndex];

    return (
        <div className="item-navigation-buttons">
            <Link to={`/${previousItem.url}`}>
                <div className="item-navigation-buttons__button">
                    <img
                        className="item-navigation-buttons__icon"
                        src={ArrowLeft}
                        alt=""
                    />
                </div>
            </Link>
            <Link to={`/${nextItem.url}`}>
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
