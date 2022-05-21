import React from "react";

import ItemSizeWeight from "../../Atoms/ItemSizeWeight/ItemSizeWeight";
import ItemOptionalData from "../../Atoms/ItemOptionalData/ItemOptionalData";

import LocationImage from "../../../img/item-location.svg";

import "./ItemInfo.scss";

const ItemInfo = ({ itemData }) => {
    return (
        <section className="item-info">
            <h2 className="item-info__title">Data about</h2>
            <div className="item-info__content">
                <div className="item-info__category">
                    <ItemSizeWeight itemSizes={itemData.sizes} />
                </div>

                <div className="item-info__category">
                    <h3 className="item-info__category-title">Location</h3>
                    <figure>
                        <img
                            className="item-info__location-image"
                            src={LocationImage}
                            alt=""
                        />
                    </figure>
                </div>

                {itemData.optional.map((data) => (
                    <div className="item-info__category">
                        <ItemOptionalData optionalData={data} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ItemInfo;
