import React, { useState, useEffect } from "react";
import axios from "axios";
import "./articles.css";
import { Link } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios.get("https://nc-news-working.herokuapp.com/api/articles/").then((res) => {
      setArticles(res.data.articles);
    });
  }, []);

  // console.log(articles);
  return (
    <div className="articles-page">
      <main>
        <h1 className="article-head">Articles</h1>
        <section className="article-card">
          <ul>
            {articles.map((article) => {
              return (
                <div className="article" key={article.article_id}>
                  <li key={article.article_id}>
                    <Link to={`/articles/${article.article_id}`}> {article.title}</Link>
                  </li>
                  <li>
                    Posted by user: {article.author} on {article.created_at}
                  </li>
                  <li>Topic: {article.topic} </li>
                  {/* <li className="article-body">{article.body} </li> */}
                  <div>
                    <ul>
                      <li>Comments - {article.comment_count}</li>

                      <li>Upvotes - {article.votes} </li>
                    </ul>
                  </div>
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
