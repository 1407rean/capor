/**
 *  用户相关的接口
 */

import request from "../service/request";

// 注册接口
const reguser = (obj) =>
  request({ url: "/api/reguser", method: "post", data: obj });

// 登录接口
const toLogin = (obj) =>
  request({ url: "/api/login", method: "post", data: obj });

export default {
  reguser,
  toLogin,
};
