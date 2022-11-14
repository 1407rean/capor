/**
 *  所有api的管理
 */
import user from './modules/user'

const api = {
    user
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