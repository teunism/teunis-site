import React from "react";
import { Link } from "react-router-dom";

import "./OverlayGrid.scss";

const OverlayGrid = ({ items }) => {
    return (
        <ul className="overlay-grid">
            {items.map((item) => (
                <li className="overlay-grid__item">
                    <Link
                        className="overlay-grid__item-link"
                        to={`item/${item.url}`}
                    >
                        <figure className="overlay-grid__item-figure">
                            <img
                                className="overlay-grid__item-image"
                                src={item.image}
                                alt=""
                            />
                        </figure>
                        <p className="overlay-grid__item-title">{item.title}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default OverlayGrid;
