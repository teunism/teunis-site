import React from "react";

import PinIcon from "../../../img/pin.svg";

import "./PinnedComment.scss";

const PinnedComment = () => {
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
                <p>
                    "This is actually not a plastic penguiño but a rare Malasian
                    baby slipper. Around 2004 it was a limited edition release
                    with 5000 items. This is the Baby Blue version. Still very
                    popular in Japan!"
                </p>
            </blockquote>
            <figcaption className="pinned-comment__comment-name">
                - Sue Susan
            </figcaption>
        </figure>
    );
};

export default PinnedComment;
