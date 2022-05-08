import React from "react";

import "./OverlayGrid.scss";

const OverlayGrid = ({ items }) => {
    console.log("items: ", items);
    return (
        <ul className="overlay-grid">
            {items.map((item) => (
                <li className="overlay-grid__item" key={`item-${item.name}`}>
                    <figure className="overlay-grid__item-figure">
                        <img
                            className="overlay-grid__item-image"
                            src={item.image}
                            alt=""
                        />
                    </figure>
                    <p className="overlay-grid__item-title">{item.name}</p>
                </li>
            ))}
        </ul>
    );
};

export default OverlayGrid;
