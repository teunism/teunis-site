import React from "react";
import { useParams } from "react-router-dom";

import { itemsData } from "../../../data/itemsData";

import ItemInfo from "../../Molecules/ItemInfo/ItemInfo";
import PinnedComment from "../../Molecules/PinnedComment/PinnedComment";
import CommentSection from "../../Molecules/CommentSection/CommentSection";
import ItemImages from "../../Molecules/ItemImages/ItemImages";

import "./ItemDetailTemplate.scss";

const ItemDetailTemplate = () => {
    const { itemUrl } = useParams();
    const item = itemsData.find((item) => item.url == itemUrl);

    const pinnedComment = item.comments.find((comment) => comment.pinned);
    return (
        <div className="item-detail-template">
            <div className="item-detail-template__images">
                <div className="item-detail-template__images-inner">
                    <ItemImages images={item.images} />
                </div>
            </div>

            <section className="item-detail-template__info">
                <div className="item-detail-template__text">
                    <h1 className="item-detail-template__title">
                        {item.title}
                    </h1>
                    <p className="item-detail-template__intro">{item.intro}</p>

                    {pinnedComment && (
                        <PinnedComment commentContent={pinnedComment} />
                    )}
                </div>

                <ItemInfo itemData={item.data} />

                <CommentSection allComments={item.comments} />
            </section>
        </div>
    );
};

export default ItemDetailTemplate;
