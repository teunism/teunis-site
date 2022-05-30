import React from "react";
import { Link } from "react-router-dom";

import GlobeIcon from "../../../img/icons/globe-icon.svg";

import "./Navigation.scss";

const Navigation = ({ icon }) => {
    return (
        <nav className="navigation">
            {icon === "overview" ? (
                <Link
                    to="overview"
                    className="navigation__link navigation__link--grid"
                >
                    <div className="navigation__icon">
                        <div className="navigation__icon-inner"></div>
                        <div className="navigation__icon-inner"></div>
                        <div className="navigation__icon-inner"></div>
                        <div className="navigation__icon-inner"></div>
                    </div>
                    <p className="navigation__icon-label">All items</p>
                </Link>
            ) : (
                <Link to="/" className="navigation__link">
                    <div className="navigation__icon">
                        <img
                            className="navigation__globe"
                            src={GlobeIcon}
                            alt=""
                        />
                        <p className="navigation__icon-label">Globe</p>
                    </div>
                </Link>
            )}
        </nav>
    );
};

export default Navigation;
