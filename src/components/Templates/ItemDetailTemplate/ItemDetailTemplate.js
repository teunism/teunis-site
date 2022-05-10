import React from "react";
import { useParams } from "react-router-dom";

import { itemsData } from "../../../data/itemsData";

import ItemInfo from "../../Molecules/ItemInfo/ItemInfo";
import PinnedComment from "../../Molecules/PinnedComment/PinnedComment";

import "./ItemDetailTemplate.scss";

const ItemDetailTemplate = () => {
    const { itemUrl } = useParams();
    const item = itemsData.find((item) => item.url == itemUrl);

    return (
        <div className="item-detail-template">
            <div className="item-detail-template__images">
                <div className="item-detail-template__images-inner">
                    <figure className="item-detail-template__figure">
                        <img
                            className="item-detail-template__big-image"
                            src={item.image}
                            alt=""
                        />
                    </figure>
                </div>
            </div>

            <section className="item-detail-template__info">
                <div className="item-detail-template__text">
                    <h1 className="item-detail-template__title">
                        {item.title}
                    </h1>
                    <p className="item-detail-template__intro">{item.intro}</p>
                </div>

                <PinnedComment />

                <ItemInfo />
            </section>
        </div>
    );
};

export default ItemDetailTemplate;
