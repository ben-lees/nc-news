import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./Article.css";
import { UserContext } from "../../contexts/UserContext";
import Upvote from "../LikeButtonComponent";
import LikeButton from "../LikeButton";
import Comments from "../Comments";

function Article() {
  const [article, setArticle] = useState({});

  const { article_id } = useParams();

  const { user } = useContext(UserContext);
  useEffect(() => {
    axios.get(`https://nc-news-working.herokuapp.com/api/articles/${article_id}`).then((res) => {
      setArticle(res.data.article);
    });
  }, [article_id]);

  // console.log(article);

  return (
    <main>
      <section>
        <div className="single-article">
          <h1 className="article-title">{article.title}</h1>
          <p>Posted in r/{article.topic}</p>
          <p>by user u/{article.author}</p>
          <p className="p-article">{article.body}</p>
          <p>
            <Comments article_id={article_id} />
          </p>
          <p>
            Upvotes: {article.votes}
            <button>
              <LikeButton />
            </button>
          </p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      </section>
    </main>
  );
}

export default Article;
