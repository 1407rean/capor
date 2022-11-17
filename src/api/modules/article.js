import request from "../service/request";

const getArticleList = () =>
  request({ url: "/my/article/articles", method: "get" });

export default {
  getArticleList,
};
