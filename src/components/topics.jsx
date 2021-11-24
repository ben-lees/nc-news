import React, { useEffect, useState } from "react";
import axios from "axios";

function Topics() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    axios.get("https://nc-news-working.herokuapp.com/api/topics").then((res) => {
      setTopics(res.data.topics);
    });
  }, []);
  console.log(topics);
  return (
    <div>
      <main>
        <h1>TOPICS</h1>
        <section>
          <ul>
            {topics.map((topic) => {
              return (
                <div>
                  <li key={topic.slug}>{topic.slug}</li>
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
