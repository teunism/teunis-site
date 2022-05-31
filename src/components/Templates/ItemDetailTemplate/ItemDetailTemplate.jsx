import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { itemsData } from "../../../data/itemsData";

import ExploreLogo from "../../../img/explore-the-garbage.svg";

import ItemInfo from "../../Molecules/ItemInfo/ItemInfo";
import PinnedComment from "../../Molecules/PinnedComment/PinnedComment";
import CommentSection from "../../Molecules/CommentSection/CommentSection";
import ItemImages from "../../Molecules/ItemImages/ItemImages";
import ShareButton from "../../Atoms/ShareButton/ShareButton";
import CloseButton from "../../Atoms/CloseButton/CloseButton";
import ItemNavigationButtons from "../../Atoms/ItemNavigationButtons/ItemNavigationButtons";
import LinkSection from "../../Molecules/LinkSection/LinkSection";

import "./ItemDetailTemplate.scss";

const ItemDetailTemplate = () => {
    const { itemUrl } = useParams();
    const { search } = useLocation();

    const item = itemsData.find((item) => item.url == itemUrl);
    const pinnedComment = item.comments.find((comment) => comment.pinned);
    const mobileScreen = window.innerWidth < 640;
    const goToPage = search === "?overview" ? "overview" : "globe";

    return (
        <div className="item-detail-template">
            <Link to="/" className="item-detail-template__home-logo">
                <img
                    className="item-detail-template__home-image"
                    src={ExploreLogo}
                    alt=""
                />
            </Link>

            {mobileScreen && (
                <>
                    <div className="item-detail-template__link-container">
                        <ItemNavigationButtons item={item} icon={goToPage} />
                        <div className="item-detail-template__share-container">
                            <ShareButton />
                            <CloseButton goTo={goToPage} />
                        </div>
                    </div>

                    <h1 className="item-detail-template__title">
                        {item.title}
                    </h1>
                </>
            )}

            <div className="item-detail-template__inner">
                <div className="item-detail-template__images">
                    <div className="item-detail-template__images-inner">
                        <ItemImages images={item.images} />
                    </div>
                </div>

                <section className="item-detail-template__info">
                    <div className="item-detail-template__text">
                        {!mobileScreen && (
                            <>
                                <div className="item-detail-template__link-container">
                                    <ItemNavigationButtons
                                        item={item}
                                        icon={goToPage}
                                    />
                                    <div className="item-detail-template__share-container">
                                        <ShareButton />
                                        <CloseButton goTo={goToPage} />
                                    </div>
                                </div>

                                <h1 className="item-detail-template__title">
                                    {item.title}
                                </h1>
                            </>
                        )}

                        {item.intro.map((paragraph, index) => (
                            <p
                                className="item-detail-template__intro"
                                key={`paragraph-${index}`}
                            >
                                {paragraph}
                            </p>
                        ))}

                        {pinnedComment && (
                            <PinnedComment commentContent={pinnedComment} />
                        )}

                        <p className="item-detail-template__intro">
                            If you know more about this item please leave a
                            comment below! This helps us to get a greater
                            understanding of the age and origins of the plastic
                            in the ocean.
                        </p>
                    </div>

                    <ItemInfo itemData={item} />

                    <LinkSection />

                    <CommentSection allComments={item.comments} />
                </section>
            </div>
        </div>
    );
};

export default ItemDetailTemplate;
