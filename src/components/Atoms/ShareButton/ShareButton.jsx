import React from "react";

import ShareIcon from "../../../img/icons/share-icon.svg";

import "./ShareButton.scss";

const ShareButton = () => {
    return (
        <a className="share-button" href="#">
            <img className="share-button__icon" src={ShareIcon} alt="" />
        </a>
    );
};

export default ShareButton;
