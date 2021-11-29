import React, { useContext, useState } from "react";
import { sendComment } from "../utils/api";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const SubmitComment = () => {
  const [comment, newComment] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(false);
  const { user } = useContext(UserContext);
  let { article_id } = useParams();

  const handleSubmit = (e) => {
    console.log(user.username, "hellooooo");
    e.preventDefault();
    setSubmitStatus(true);
    sendComment(article_id, user.username, comment).catch((err) => {
      console.dir(err);
    });
  };

  if (submitStatus) {
    return (
      <div>
        <p>Comment sent!</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          <input type="text" name="comment" onChange={(e) => newComment(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SubmitComment;
