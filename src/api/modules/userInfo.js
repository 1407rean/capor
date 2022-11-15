/**
 *  用户信息相关接口
 */

import request from '../service/request'

// 获取用户列表
const getUserlist = ()=> request({url:'/my/userlist',method:"get"})

// 获取用户信息
const getUserinfo = () => request({url:'/my/userinfo',method:"get"})

// 删除用户
const deleteUser = obj => request({url: '/my/deleteuser',method:"post",data: obj})

export default {
    getUserlist,
    getUserinfo,
    deleteUser
}