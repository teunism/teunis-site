import React from "react";
import { Link } from "react-router-dom";

import CloseIcon from "../../../img/icons/cross.svg";

import "./CloseButton.scss";

const CloseButton = ({ goTo }) => {
    const url = goTo === "globe" ? "/" : "/overview";
    return (
        <Link className="close-button" to={url}>
            <img className="close-button__icon" src={CloseIcon} alt="" />
        </Link>
    );
};

export default CloseButton;
