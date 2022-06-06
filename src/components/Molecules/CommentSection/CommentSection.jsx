import React from "react";

import Comments from "../../Atoms/Comments/Comments";

import "./CommentSection.scss";

const CommentSection = ({ allComments }) => {
    const resizeTextArea = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = e.target.scrollHeight + "px";
    };

    return (
        <section className="comment-section" id="comment-section">
            <h2 className="comment-section__title">
                Hey, do you know more about this item?
            </h2>
            <textarea
                className="comment-section__comment-field"
                name=""
                id=""
                rows="1"
                placeholder="About this object..."
                onChange={(e) => resizeTextArea(e)}
            ></textarea>

            <Comments allComments={allComments} />
        </section>
    );
};

export default CommentSection;
