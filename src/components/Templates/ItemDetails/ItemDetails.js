import React from "react";
import { useParams } from "react-router-dom";

import { itemsData } from "../../../data/itemsData";

import PinnedComment from "../../Molecules/PinnedComment/PinnedComment";

import "./ItemDetails.scss";

const ItemDetails = () => {
    const { itemUrl } = useParams();
    const item = itemsData.find((item) => item.url == itemUrl);
    return (
        <div className="item-details">
            <div className="item-details__images">
                <figure className="item-details__figure">
                    <img
                        className="item-details__big-image"
                        src={item.image}
                        alt=""
                    />
                </figure>
            </div>
            <section className="item-details__info">
                <h1 className="item-details__title">{item.title}</h1>
                <div className="item-details__text">
                    <p className="item-details__intro">{item.intro}</p>
                    <PinnedComment />
                </div>
            </section>
        </div>
    );
};

export default ItemDetails;
