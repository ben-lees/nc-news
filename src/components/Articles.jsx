import React, { useState, useEffect } from "react";
import axios from "axios";
import "./articles.css";

function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get("https://nc-news-working.herokuapp.com/api/articles").then((res) => {
      setArticles(res.data.articles);
    });
  }, []);

  console.log(articles);
  return (
    <div className="articles-page">
      <main>
        <h1 className="article-head">Articles</h1>
        <section>
          <ul>
            {articles.map((article) => {
              return (
                <div className="article">
                  <li key={article.article_id}>
                    <span>{article.title}</span>
                    <br />
                    <span>
                      Posted by user: {article.author} on {article.created_at}
                    </span>
                    <br />
                    <span>Topic: {article.topic} </span>
                    <br />
                    <span className="article-body">{article.body} </span>
                  </li>
                </div>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Articles;
