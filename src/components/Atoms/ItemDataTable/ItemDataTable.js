import React from "react";

import "./ItemDataTable.scss";

const ItemDataTable = ({ data }) => {
    return (
        <>
            <h3 className="item-data-table__title">Size & Weight</h3>
            <dl className="item-data-table__table">
                <div className="item-data-table__data-pair">
                    <dd className="item-data-table__data-title">Material</dd>
                    <dt className="item-data-table__data-value">Plastic</dt>
                </div>

                <div className="item-data-table__data-pair">
                    <dd className="item-data-table__data-title">Category</dd>
                    <dt className="item-data-table__data-value">Footwear</dt>
                </div>
            </dl>
        </>
    );
};

export default ItemDataTable;
