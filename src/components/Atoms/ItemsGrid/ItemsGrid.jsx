import React from "react";
import { Link } from "react-router-dom";

import "./ItemsGrid.scss";

const ItemsGrid = ({ items, size, page }) => {
    const classes =
        size === "big" ? "items-grid items-grid--big" : "items-grid";

    return (
        <ul className={classes}>
            {items.map((item, index) => (
                <li className="items-grid__item" key={`item-${index}`}>
                    <Link
                        className="items-grid__item-link"
                        to={{
                            pathname: `/${item.url}`,
                            search: page,
                        }}
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
