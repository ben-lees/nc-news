import React, { useState } from "react";
// import cn from "classnames";
import Upvote from "./LikeButtonComponent";
import "./LikeButton.css";

const LikeButton = () => {
  const [liked, setLiked] = useState(null);

  return (
    <button onClick={() => setLiked(!liked)}>
      <div>
        <Upvote />
        <br />
        <span>Upvote</span>
      </div>
    </button>
  );
};

export default LikeButton;
