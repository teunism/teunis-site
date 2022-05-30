import React from "react";

import LocationImage from "../../../img/item-location.svg";

import "./ItemLocation.scss";

const ItemLocation = () => {
    return (
        <>
            <h3 className="item-location__title">Location</h3>
            <figure className="item-location__figure">
                <img
                    className="item-location__image"
                    src={LocationImage}
                    alt=""
                />
            </figure>
        </>
    );
};

export default ItemLocation;
