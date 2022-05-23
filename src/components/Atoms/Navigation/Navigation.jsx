import React from "react";

import { Link } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="overview" className="navigation__link">
                <div className="navigation__icon">
                    <div className="navigation__icon-inner"></div>
                    <div className="navigation__icon-inner"></div>
                    <div className="navigation__icon-inner"></div>
                    <div className="navigation__icon-inner"></div>
                </div>
            </Link>
        </nav>
    );
};

export default Navigation;
