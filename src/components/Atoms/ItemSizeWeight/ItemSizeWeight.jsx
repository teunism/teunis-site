import React from "react";

import "./ItemSizeWeight.scss";

const ItemSizeWeight = ({ itemSizes }) => {
    return (
        <>
            <h3 className="item-size-weight__title">Size</h3>
            <svg
                className="item-size-weight__image"
                width="100%"
                viewBox="0 0 387 306"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="0.558594"
                    y="0.666016"
                    width="384.973"
                    height="304.121"
                />

                <text>
                    <textPath
                        className="item-size-weight__text"
                        href="#height"
                        fill="white"
                    >
                        {itemSizes.heightCm}{" "}
                        <tspan className="item-size-weight__measurement">
                            cm
                        </tspan>
                    </textPath>
                </text>
                <path
                    id="height"
                    fill="none"
                    strokeWidth="2.46186"
                    d="M27.8906 192.083V118.553"
                />

                <text>
                    <textPath
                        className="item-size-weight__text"
                        href="#depth"
                        fill="white"
                    >
                        {itemSizes.depthCm}{" "}
                        <tspan className="item-size-weight__measurement">
                            cm
                        </tspan>
                    </textPath>
                </text>
                <path
                    id="depth"
                    fill="none"
                    strokeWidth="2.46186"
                    d="M128.676 180.227L202.206 180.227"
                />

                <text>
                    <textPath
                        className="item-size-weight__text"
                        href="#width"
                        fill="white"
                        side="right"
                    >
                        {itemSizes.widthCm}{" "}
                        <tspan className="item-size-weight__measurement">
                            cm
                        </tspan>
                    </textPath>
                </text>
                <path
                    id="width"
                    fill="none"
                    strokeWidth="2.46186"
                    d="M128.676 297.362L202.206 297.362"
                />

                <path
                    d="M57.3145 76.8528H273.056M57.3145 76.8528V254.852M57.3145 76.8528L110.893 32.208M273.056 76.8528V254.852M273.056 76.8528L328.778 32.208M273.056 254.852H57.3145M273.056 254.852L328.778 209.048M57.3145 254.852L110.893 209.048M110.893 32.208V209.048M110.893 32.208H219.835H328.778M328.778 32.208V209.048M328.778 209.048H110.893"
                    stroke="#2DA4B1"
                    strokeWidth="2.5"
                />
                <path
                    d="M57.3242 76.3877L57.7558 254.788M57.7558 254.788L111.464 209.139M57.7558 254.788H273.555"
                    stroke="white"
                    strokeWidth="2.5"
                />
            </svg>
        </>
    );
};

export default ItemSizeWeight;
