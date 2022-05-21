import React from "react";

import PinIcon from "../../../img/pin.svg";

import "./PinnedComment.scss";

const PinnedComment = ({ commentContent }) => {
    return (
        <figure className="pinned-comment">
            <p className="pinned-comment__supertitle">
                <img
                    className="pinned-comment__pin-icon"
                    src={PinIcon}
                    alt=""
                />
                Pinned comment by The Ocean Cleanup
            </p>
            <blockquote className="pinned-comment__comment-content">
                <p>{commentContent.content}</p>
            </blockquote>
            <figcaption className="pinned-comment__comment-name">
                - {commentContent.name}
            </figcaption>
        </figure>
    );
};

export default PinnedComment;
