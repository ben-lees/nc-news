import React, { useContext, useEffect, useState } from "react";
import { getComments } from "../utils/api";
import LikeButton from "./LikeButton";

import { UserContext } from "../contexts/UserContext";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    getComments(article_id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  return (
    <div>
      <h3>Comments</h3>
      <section>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h4>{comment.author}</h4>
              <p>{comment.body}</p>

              <p>
                Upvotes:
                <b>{comment.votes}</b>
              </p>
            </li>
          );
        })}
        <button>
          <LikeButton />
        </button>
      </section>
    </div>
  );
};

export default Comments;
