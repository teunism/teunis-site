import React from "react";

import "./ItemInfo.scss";

const ItemInfo = () => {
    return (
        <section className="item-info">
            <h2 className="item-info__title">Data about</h2>
            <div className="item-info__content">
                <div h3 className="item-info__category">
                    <h3 className="item-info__category-title">Size & Weight</h3>
                </div>

                <div h3 className="item-info__category">
                    <h3 className="item-info__category-title">Location</h3>
                </div>

                <div h3 className="item-info__category">
                    <h3 className="item-info__category-title">Material</h3>
                </div>

                <div h3 className="item-info__category">
                    <h3 className="item-info__category-title">Rest</h3>
                </div>
            </div>
        </section>
    );
};

export default ItemInfo;
