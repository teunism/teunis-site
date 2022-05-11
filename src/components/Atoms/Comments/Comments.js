import React from "react";

import HeartIcon from "../../../img/heart.svg";
import PinIcon from "../../../img/pin.svg";

import "./Comments.scss";

const Comments = () => {
    return (
        <ol className="comments">
            <li className="comments__comment">
                <p className="comments__comment-supertitle">
                    <img className="comments__pin-icon" src={PinIcon} alt="" />
                    Pinned comment by The Ocean Cleanup
                </p>

                <figure>
                    <blockquote className="comments__comment-content">
                        <p>
                            "This is actually not a plastic penguiño but a rare
                            Malasian baby slipper. Around 2004 it was a limited
                            edition release with 5000 items. This is the Baby
                            Blue version. Still very popular in Japan!"
                        </p>
                    </blockquote>
                    <figcaption className="comments__comment-name">
                        - Sue Susan
                    </figcaption>
                </figure>

                <p className="comments__comment-likes">
                    <img
                        className="comments__heart-icon"
                        src={HeartIcon}
                        alt=""
                    />
                    12
                </p>
            </li>
            <li className="comments__comment">
                <figure>
                    <blockquote className="comments__comment-content">
                        <p>
                            "This is actually not a plastic penguiño but a rare
                            Malasian baby slipper. Around 2004 it was a limited
                            edition release with 5000 items. This is the Baby
                            Blue version. Still very popular in Japan!"
                        </p>
                    </blockquote>
                    <figcaption className="comments__comment-name">
                        - Sue Susan
                    </figcaption>
                </figure>

                <p className="comments__comment-likes">
                    <img
                        className="comments__heart-icon"
                        src={HeartIcon}
                        alt=""
                    />
                    12
                </p>
            </li>
        </ol>
    );
};

export default Comments;
