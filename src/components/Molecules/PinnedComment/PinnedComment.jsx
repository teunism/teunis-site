import React from "react";

import PinIcon from "../../../img/pin.svg";

import "./PinnedComment.scss";

const PinnedComment = ({ commentContent }) => {
    return (
        <>
            <figure className="pinned-comment">
                <p className="pinned-comment__supertitle">
                    <img
                        className="pinned-comment__pin-icon"
                        src={PinIcon}
                        alt=""
                    />
                    Pinned comment by The Ocean Cleanup
                </p>
                <blockquote>
                    <p className="pinned-comment__comment-content">
                        {commentContent.content}
                    </p>
                </blockquote>
                <figcaption className="pinned-comment__comment-name">
                    - {commentContent.name}
                </figcaption>
            </figure>
            <div className="pinned-comment__under">
                <p className="pinned-comment__comments-quantity">35 comment</p>
                <a
                    className="pinned-comment__comments-link"
                    href="#comment-section"
                >
                    See all comments
                </a>
            </div>
        </>
    );
};

export default PinnedComment;
