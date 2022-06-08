import React, { useState } from "react";

import Comments from "../../Atoms/Comments/Comments";

import PostIcon from "../../../img/icons/post-icon.svg";

import "./CommentSection.scss";

const CommentSection = ({ allComments }) => {
    const [clicked, setClicked] = useState(false);

    const resizeTextArea = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    };

    const classes = clicked
        ? "comment-section__comment-field-container comment-section__comment-field-container--clicked"
        : "comment-section__comment-field-container";

    return (
        <section className="comment-section" id="comment-section">
            <h2 className="comment-section__title">
                Hey, do you know more about this item?
            </h2>

            <div className={classes}>
                <textarea
                    className="comment-section__comment-field"
                    name=""
                    id=""
                    rows="1"
                    placeholder="About this object..."
                    onChange={(e) => resizeTextArea(e)}
                ></textarea>

                <textarea
                    className="comment-section__comment-field comment-section__comment-field--name"
                    name=""
                    id=""
                    rows="1"
                    placeholder="Your name (optional)"
                ></textarea>

                <button
                    className="comment-section__post-button"
                    onClick={(e) => {
                        setClicked(!clicked);
                    }}
                >
                    <img
                        className="comment-section__post-icon"
                        src={PostIcon}
                        alt=""
                    />
                </button>
            </div>

            <Comments allComments={allComments} />
        </section>
    );
};

export default CommentSection;
