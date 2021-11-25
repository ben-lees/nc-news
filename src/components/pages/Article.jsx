import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function Article() {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    axios.get(`https://nc-news-working.herokuapp.com/api/articles/${article_id}`).then((res) => {
      setArticle(res.data.article);
    });
  }, [article_id]);

  console.log(article);

  return (
    <main>
      <h1>Article {article_id}</h1>
      <div>
        <p>{article.title}</p>
      </div>
    </main>
  );
}

export default Article;
