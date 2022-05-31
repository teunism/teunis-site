import React from "react";

import HeartIcon from "../../../img/heart.svg";
import PinIcon from "../../../img/pin.svg";

import "./Comments.scss";

const Comments = ({ allComments }) => {
    const sortedComments = allComments.sort(sortComments);

    function sortComments(commentA, commentB) {
        const likesOfCommentA = commentA.likes ? commentA.likes : 0;
        const likesOfCommentB = commentB.likes ? commentB.likes : 0;

        if (commentB.pinned) {
            return 1;
        }
        if (commentA.pinned) {
            return -1;
        }
        if (likesOfCommentA < likesOfCommentB) {
            return 1;
        }
        if (likesOfCommentA > likesOfCommentB) {
            return -1;
        }
        return 0;
    }

    return (
        <ol className="comments">
            {sortedComments.map((comment, index) => (
                <li className="comments__comment" key={`comment-${index}`}>
                    {comment.pinned && (
                        <p className="comments__comment-supertitle">
                            <img
                                className="comments__pin-icon"
                                src={PinIcon}
                                alt=""
                            />
                            Pinned comment by The Ocean Cleanup
                        </p>
                    )}

                    <figure>
                        <blockquote className="comments__comment-content">
                            <p>{comment.content}</p>
                        </blockquote>
                        <figcaption className="comments__comment-name">
                            - {comment.name}
                        </figcaption>
                    </figure>

                    <p className="comments__comment-likes">
                        <img
                            className="comments__heart-icon"
                            src={HeartIcon}
                            alt=""
                        />
                        {comment.likes}
                    </p>
                </li>
            ))}
        </ol>
    );
};

export default Comments;
