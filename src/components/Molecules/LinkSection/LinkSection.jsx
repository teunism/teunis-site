import React from "react";

import ArrowRight from "../../../img/icons/arrow-right-white.svg";

import "./LinkSection.scss";

const LinkSection = () => {
    return (
        <section className="link-section">
            <h3 className="link-section__title">Learn more</h3>
            <ul className="link-section__list">
                <li className="link-section__item">
                    <a className="link-section__link" href="#">
                        <img
                            className="link-section__arrow"
                            src={ArrowRight}
                            alt=""
                        />
                        The recycling process of the plastic
                    </a>
                </li>
                <li className="link-section__item">
                    <a className="link-section__link" href="#">
                        <img
                            className="link-section__arrow"
                            src={ArrowRight}
                            alt=""
                        />
                        The recycling process of the plastic
                    </a>
                </li>
                <li className="link-section__item">
                    <a className="link-section__link" href="#">
                        <img
                            className="link-section__arrow"
                            src={ArrowRight}
                            alt=""
                        />
                        The recycling process of the plastic
                    </a>
                </li>
                <li className="link-section__item">
                    <a className="link-section__link" href="#">
                        <img
                            className="link-section__arrow"
                            src={ArrowRight}
                            alt=""
                        />
                        The recycling process of the plastic
                    </a>
                </li>
                <li className="link-section__item">
                    <a className="link-section__link" href="#">
                        <img
                            className="link-section__arrow"
                            src={ArrowRight}
                            alt=""
                        />
                        The recycling process of the plastic
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default LinkSection;
