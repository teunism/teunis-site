import React from "react";
import { Link } from "react-router-dom";

import ArrowLeft from "../../../img/icons/arrow-left-white.svg";
import ArrowRight from "../../../img/icons/arrow-right-white.svg";

import "./ItemNavigationButtons.scss";

const ItemNavigationButtons = () => {
    return (
        <div className="item-navigation-buttons">
            <Link to="/">
                <div className="item-navigation-buttons__button">
                    <img
                        className="item-navigation-buttons__icon"
                        src={ArrowLeft}
                        alt=""
                    />
                </div>
            </Link>
            <Link to="/">
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
