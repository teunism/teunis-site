import React from "react";
import { Link } from "react-router-dom";

import "./ItemsGrid.scss";

const ItemsGrid = ({ items, size }) => {
    const classes =
        size === "big" ? "items-grid items-grid--big" : "items-grid";

    return (
        <ul className={classes}>
            {items.map((item) => (
                <li className="items-grid__item">
                    <Link
                        className="items-grid__item-link"
                        to={`/items/${item.url}`}
                        replace
                    >
                        <figure className="items-grid__item-figure">
                            <img
                                className="items-grid__item-image"
                                src={item.images.mainImage}
                                alt=""
                            />
                        </figure>
                        <p className="items-grid__item-title">{item.title}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ItemsGrid;
