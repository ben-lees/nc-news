import axios from "axios";

const itemsApi = axios.create({
  baseURL: "https://nc-news-working.herokuapp.com/api/users",
});

export const getUsers = () => {
  return itemsApi.get("/users").then((res) => {
    return res.data.users;
  });
};
