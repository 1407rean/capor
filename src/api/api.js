/**
 *  所有api的管理
 */
import user from './modules/user'
import userInfo  from './modules/userInfo'

const api = {
    user,
    userInfo
}

export default api

// import request from './service/request'
// export default {
//     toLogin(obj){
//         return request({
//             url:'/api/login',
//             method: 'post',
//             data: obj,
//             mock: true
//         })
//     }
// }