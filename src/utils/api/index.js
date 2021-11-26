import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-working.herokuapp.com/api/",
});

export const getComments = async(articleId) => {
    const res = await newsApi.get(`/articles/${articleId}/comments`);
    return res.data.comments;
};