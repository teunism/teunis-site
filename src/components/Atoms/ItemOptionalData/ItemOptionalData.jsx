import React from "react";

import "./ItemOptionalData.scss";

const ItemOptionalData = ({ optionalData }) => {
    return (
        <>
            <h3 className="item-optional-data__title">{optionalData.title}</h3>
            <dl className="item-optional-data__table">
                {optionalData.properties.map((property) => (
                    <div className="item-optional-data__data-pair">
                        <dd className="item-optional-data__data-title">
                            {property.title}
                        </dd>
                        <dt className="item-optional-data__data-value">
                            {property.value}
                        </dt>
                    </div>
                ))}
            </dl>
        </>
    );
};

export default ItemOptionalData;
