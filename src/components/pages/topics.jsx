import React, { useEffect, useState } from "react";
import axios from "axios";
import "./topics.css";
import { Button } from "../Button";

function Topics() {
  const [topics, setTopics] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("https://nc-news-working.herokuapp.com/api/topics").then((res) => {
      setTopics(res.data.topics);
    });
  }, []);
  // console.log(topics);
  return (
    <div className="topics-page">
      <main>
        <h1 className="topics-head">TOPICS</h1>
        <form>
          <fieldset>
            <label htmlFor="topics-search"></label>
            <input
              type="text"
              id="topics-search"
              placeholder="Search for a topic"
              onChange={(e) => setQuery(e.target.value)}
            />
          </fieldset>
        </form>
        <section>
          <ul>
            {topics
              .filter((topic) => topic.slug.indexOf(query) > -1)
              .map((topic) => {
                return (
                  <div>
                    <Button key={topic.slug}>{topic.slug}</Button>
                    <p>{topic.description}</p>
                  </div>
                );
              })}
          </ul>
        </section>
      </main>
    </div>
  );
  //display topics
}

export default Topics;
