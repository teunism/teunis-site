import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import "./ItemSizeWeight.scss";

const ItemSizeWeight = ({ itemSizes }) => {
    const { ref, inView, entry } = useInView({
        threshold: 1,
    });
    const [animationDone, setAnimationDone] = useState(false);

    const classes = animationDone
        ? "item-size-weight__image item-size-weight__image--in-view"
        : "item-size-weight__image";

    useEffect(() => {
        setAnimationDone(false);
    }, [itemSizes]);

    useEffect(() => {
        if (inView) {
            setAnimationDone(true);
        }
    }, [inView]);

    return (
        <>
            <h3 className="item-size-weight__title">Size</h3>

            <svg
                ref={ref}
                className={classes}
                width="100%"
                viewBox="0 0 372 311"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="0.551514"
                    y="0.825195"
                    width="370.748"
                    height="309.649"
                />
                <path
                    d="M53.1753 81.1331H268.917M53.1753 81.1331V259.133H268.917M53.1753 81.1331L106.754 36.4883H215.696H324.639M268.917 81.1331V259.133M268.917 81.1331L324.639 36.4883M268.917 259.133L324.639 213.328V36.4883"
                    stroke="#2DA4B1"
                    strokeWidth="2.5"
                />
                <path
                    d="M106.736 37.7061C105.947 50.3429 106.407 160.126 106.736 213.438M106.736 213.438H322.947M106.736 213.438L53.5576 258.959"
                    stroke="#2DA4B1"
                    strokeWidth="1.5"
                    strokeDasharray="20"
                />

                <line
                    className="item-size-weight__line"
                    x1="53.1669"
                    x2="53.1669"
                    y1="260.356"
                    y2="80.7861"
                    stroke="white"
                    strokeWidth="3"
                />
                <line
                    className="item-size-weight__line"
                    x2="106.935"
                    x1="53.3273"
                    y1="259.214"
                    y2="213.486"
                    stroke="white"
                    strokeWidth="3"
                />
                <line
                    className="item-size-weight__line"
                    x1="51.9169"
                    x2="269.391"
                    y1="259.126"
                    y2="259.126"
                    stroke="white"
                    strokeWidth="3"
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
            </svg>

            {/* <svg
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
                    d="
                    M57.3145 
                    76.8528H273.056M57.3145 
                    76.8528V254.852M57.3145 
                    76.8528L110.893  
                    32.208M273.056 
                    76.8528V254.852M273.056 
                    76.8528L328.778 
                    32.208M273.056 
                    254.852H57.3145M273.056 
                    254.852L328.778 
                    209.048M57.3145 
                    254.852L110.893 
                    209.048M110.893 
                    32.208V209.048M110.893 
                    32.208H219.835H328.778M328.778 
                    32.208V209.048M328.778 
                    209.048H110.893"
                    stroke="#2DA4B1"
                    strokeWidth="2.5"
                />

                <line
                    className="item-size-weight__line"
                    x1="57.3145"
                    y1="256.082"
                    x2="57.3145"
                    y2="76.5126"
                    stroke="white"
                    strokeWidth="3"
                />
                <line
                    className="item-size-weight__line"
                    x1="57.3127"
                    y1="254.750"
                    x2="110.9201"
                    y2="209.022"
                    stroke="white"
                    strokeWidth="3"
                />
                <line
                    className="item-size-weight__line"
                    x1="56.0646"
                    y1="254.852"
                    x2="273.5381"
                    y2="254.852"
                    stroke="white"
                    strokeWidth="3"
                />
            </svg> */}
        </>
    );
};

export default ItemSizeWeight;
