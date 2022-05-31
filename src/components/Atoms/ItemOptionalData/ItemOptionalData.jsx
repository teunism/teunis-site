import React from "react";

import "./ItemOptionalData.scss";

const ItemOptionalData = ({ optionalData }) => {
    return (
        <>
            <h3 className="item-optional-data__title">Data</h3>
            <dl className="item-optional-data__table">
                {optionalData.map((data, index) => (
                    <div
                        className="item-optional-data__data-row"
                        key={`item-data-${index}`}
                    >
                        {data.properties.map((property, index) => (
                            <div
                                className="item-optional-data__data-pair"
                                key={`item-property-${index}`}
                            >
                                <dd className="item-optional-data__data-title">
                                    {property.title}
                                </dd>
                                <dt className="item-optional-data__data-value">
                                    {property.value}
                                </dt>
                            </div>
                        ))}
                    </div>
                ))}
            </dl>
        </>
    );
};

export default ItemOptionalData;
