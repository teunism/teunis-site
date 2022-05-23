import React from "react";

import "./ItemSizeWeight.scss";

const ItemSizeWeight = ({ itemSizes }) => {
    return (
        <>
            <h3 className="item-size-weight__title">Size & Weight</h3>
            <dl className="item-size-weight__data">
                <div className="item-size-weight__data-pair">
                    <dd className="item-size-weight__data-title">Height</dd>
                    <dt className="item-size-weight__data-value">
                        {itemSizes.heightCm}{" "}
                        <span className="item-size-weight__data-value-measurement">
                            cm
                        </span>
                    </dt>
                </div>

                <div className="item-size-weight__data-pair">
                    <dd className="item-size-weight__data-title">Width</dd>
                    <dt className="item-size-weight__data-value">
                        {itemSizes.widthCm}{" "}
                        <span className="item-size-weight__data-value-measurement">
                            cm
                        </span>
                    </dt>
                </div>

                <div className="item-size-weight__data-pair">
                    <dd className="item-size-weight__data-title">Depth</dd>
                    <dt className="item-size-weight__data-value">
                        {itemSizes.depthCm}{" "}
                        <span className="item-size-weight__data-value-measurement">
                            cm
                        </span>
                    </dt>
                </div>

                <div className="item-size-weight__data-pair">
                    <dd className="item-size-weight__data-title">Weight</dd>
                    <dt className="item-size-weight__data-value">
                        {itemSizes.weightGr}{" "}
                        <span className="item-size-weight__data-value-measurement">
                            gr
                        </span>
                    </dt>
                </div>
            </dl>
        </>
    );
};

export default ItemSizeWeight;
