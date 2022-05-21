import React from "react";
import { Link, useParams } from "react-router-dom";

import { itemsData } from "../../../data/itemsData";

import ArrowIcon from "../../../img/arrow-left.svg";

import ItemInfo from "../../Molecules/ItemInfo/ItemInfo";
import PinnedComment from "../../Molecules/PinnedComment/PinnedComment";
import CommentSection from "../../Molecules/CommentSection/CommentSection";
import ItemImages from "../../Molecules/ItemImages/ItemImages";

import "./ItemDetailTemplate.scss";

const ItemDetailTemplate = () => {
    const { itemUrl } = useParams();

    const item = itemsData.find((item) => item.url == itemUrl);
    const pinnedComment = item.comments.find((comment) => comment.pinned);
    const mobileScreen = window.innerWidth < 640;

    const classes = mobileScreen
        ? "item-detail-template item-detail-template--mobile"
        : "item-detail-template";

    return (
        <div className={classes}>
            {mobileScreen && (
                <>
                    <Link className="item-detail-template__link" to="/">
                        <img
                            className="item-detail-template__arrow-icon"
                            src={ArrowIcon}
                            alt=""
                        />
                    </Link>
                    <h1 className="item-detail-template__title">
                        {item.title}
                    </h1>
                </>
            )}
            <div className="item-detail-template__images">
                <div className="item-detail-template__images-inner">
                    <ItemImages images={item.images} />
                </div>
            </div>

            <section className="item-detail-template__info">
                <div className="item-detail-template__text">
                    {!mobileScreen && (
                        <>
                            <Link className="item-detail-template__link" to="/">
                                <img
                                    className="item-detail-template__arrow-icon"
                                    src={ArrowIcon}
                                    alt=""
                                />
                            </Link>
                            <h1 className="item-detail-template__title">
                                {item.title}
                            </h1>
                        </>
                    )}
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
