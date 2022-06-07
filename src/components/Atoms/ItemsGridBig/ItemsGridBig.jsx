import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { activeFilterContext } from "../../../App";

import "./ItemsGridBig.scss";

const ItemsGridBig = ({ items, page }) => {
    const { activeFilter } = useContext(activeFilterContext);

    function sortItems(itemA, itemB) {
        if (!!!Object.keys(activeFilter.sort).length) return;

        const sortProperty = Object.keys(activeFilter.sort)[0];
        const sortWord = Object.values(activeFilter.sort)[0].split(" ")[0];

        const biggerOrSmallerSign =
            sortWord === "light" || sortWord === "small" || sortWord === "new"
                ? ">"
                : "<";

        if (sortProperty === "date of aquasition") {
            return (
                new Date(itemB.data.sortOptions[sortProperty]) -
                new Date(itemA.data.sortOptions[sortProperty])
            );
        }

        if (sortProperty === "weight" || sortProperty === "size") {
            if (
                itemA.data.sortOptions[sortProperty] <
                itemB.data.sortOptions[sortProperty]
            ) {
                return 1;
            }
            if (
                itemA.data.sortOptions[sortProperty] >
                itemB.data.sortOptions[sortProperty]
            ) {
                return -1;
            }
            return 0;
        }
    }

    const filteredItems = Object.keys(activeFilter.filters).reduce(
        (all, cur) => {
            return all.filter(
                (item) =>
                    item.data.filterOptions[cur] == activeFilter.filters[cur]
            );
        },
        items
    );

    const sortedItems = Object.keys(activeFilter.filters)
        .reduce((all, cur) => {
            return all.filter(
                (item) =>
                    item.data.filterOptions[cur] == activeFilter.filters[cur]
            );
        }, items)
        .sort(sortItems);

    console.log(sortedItems);

    return (
        <ul className="items-grid-big">
            {filteredItems.map((item, index) => (
                <li className="items-grid-big__item" key={`item-${index}`}>
                    <Link
                        className="items-grid-big__item-link"
                        to={{
                            pathname: `/${item.url}`,
                            search: page,
                        }}
                        replace
                    >
                        <figure className="items-grid-big__item-figure">
                            <img
                                className="items-grid-big__item-image"
                                src={item.images.mainImage}
                                alt=""
                            />
                        </figure>
                        <p className="items-grid-big__item-title">
                            {item.title}
                        </p>
                    </Link>
                </li>
            ))}
            <li className="items-grid-big__item--not-visible"></li>
            <li className="items-grid-big__item--not-visible"></li>
            <li className="items-grid-big__item--not-visible"></li>
            <li className="items-grid-big__item--not-visible"></li>
        </ul>
    );
};

export default ItemsGridBig;
