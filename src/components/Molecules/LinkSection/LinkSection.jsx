import React from "react";

import ArrowRight from "../../../img/icons/arrow-right-white.svg";
import ExternLinkIcon from "../../../img/icons/extern-link.svg";

import "./LinkSection.scss";

const LinkSection = () => {
    return (
        <section className="link-section">
            <div className="link-section__title-container">
                <h3 className="link-section__title">Learn more</h3>
                <img
                    className="link-section__link-icon"
                    src={ExternLinkIcon}
                    alt=""
                />
            </div>
            <ul className="link-section__list">
                <li className="link-section__item">
                    <a
                        className="link-section__link"
                        href="https://theoceancleanup.com/oceans/"
                        target="_blank"
                    >
                        <img
                            className="link-section__arrow"
                            src={ArrowRight}
                            alt=""
                        />
                        How we clean the oceans
                    </a>
                </li>

                <li className="link-section__item">
                    <a
                        className="link-section__link"
                        href="https://theoceancleanup.com/rivers/"
                        target="_blank"
                    >
                        <img
                            className="link-section__arrow"
                            src={ArrowRight}
                            alt=""
                        />
                        How we clean the rivers
                    </a>
                </li>

                <li className="link-section__item">
                    <a
                        className="link-section__link"
                        href="https://theoceancleanup.com/updates/category/recycling/"
                        target="_blank"
                    >
                        <img
                            className="link-section__arrow"
                            src={ArrowRight}
                            alt=""
                        />
                        What happens to the plastic
                    </a>
                </li>

                <li className="link-section__item">
                    <a
                        className="link-section__link"
                        href="https://theoceancleanup.com/donate/"
                        target="_blank"
                    >
                        <img
                            className="link-section__arrow"
                            src={ArrowRight}
                            alt=""
                        />
                        Help us clean the oceans by donating
                    </a>
                </li>

                <li className="link-section__item">
                    <a
                        className="link-section__link"
                        href="https://theoceancleanup.com/updates/category/recycling/"
                        target="_blank"
                    >
                        <img
                            className="link-section__arrow"
                            src={ArrowRight}
                            alt=""
                        />
                        Most recent updates from The Ocean Cleanup
                    </a>
                </li>

                <li className="link-section__item">
                    <a
                        className="link-section__link"
                        href="https://theoceancleanup.com/plastic-tracker/"
                        target="_blank"
                    >
                        <img
                            className="link-section__arrow"
                            src={ArrowRight}
                            alt=""
                        />
                        See where your plastic trash would end up
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default LinkSection;
