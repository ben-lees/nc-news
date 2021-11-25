import axios from "axios";

const itemsApi = axios.create({
  baseURL: "https://nc-news-working.herokuapp.com/api/topics",
});

export const getTopics = () => {
  return itemsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};
