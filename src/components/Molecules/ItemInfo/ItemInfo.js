import React from "react";

import "./ItemInfo.scss";

const ItemInfo = () => {
    return (
        <section className="item-info">
            <h2 className="item-info__title">Data about</h2>
            <div className="item-info__content">
                <div>
                    <h3 className="item-info__category">Size & Weight</h3>
                </div>

                <div>
                    <h3 className="item-info__category">Location</h3>
                </div>

                <div>
                    <h3 className="item-info__category">Material</h3>
                </div>

                <div>
                    <h3 className="item-info__category">Rest</h3>
                </div>
            </div>
        </section>
    );
};

export default ItemInfo;
