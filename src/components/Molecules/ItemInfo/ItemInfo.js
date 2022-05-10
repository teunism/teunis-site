import React from "react";

import ItemSizeWeight from "../../Atoms/ItemSizeWeight/ItemSizeWeight";
import ItemDataTable from "../../Atoms/ItemDataTable/ItemDataTable";

import LocationImage from "../../../img/item-location.svg";

import "./ItemInfo.scss";

const ItemInfo = () => {
    return (
        <section className="item-info">
            <h2 className="item-info__title">Data about</h2>
            <div className="item-info__content">
                <div className="item-info__category">
                    <ItemSizeWeight />
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

                <div className="item-info__category">
                    <ItemDataTable />
                </div>

                <div className="item-info__category">
                    <ItemDataTable />
                </div>
            </div>
        </section>
    );
};

export default ItemInfo;
