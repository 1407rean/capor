import axios from 'axios'
import config from '../../config'


const service = axios.create({
    baseURL: config.baseApi,
    headers: {
        "Content-Type": "application/json;chartset=utf-8"
    }
})

/**
 *  请求拦截
 */

service.interceptors.request.use((config)=>{
    config.headers = config.headers || {}
    if(sessionStorage.getItem('token')){
        config.headers.Authorization = sessionStorage.getItem('token') || ''
    }
    return config
})

/**
 *  响应拦截
 */

service.interceptors.response.use((res)=>{
    const { status,data,msg } = res
    // 后端协商 视情况而定
    if (status == 200) {
        return data
    } else {
        // 网络请求错误
        return Promise.reject(msg || '网络请求错误，请稍后再试...')
    }
})

/**
 *  封装的核心函数
 */

function request(options){
    // options => {}
    options.method = options.method || 'get'
    if (options.method.toLowerCase() == 'get') {
        options.params = options.data
    }
    // 对mock的处理
    let isMock = config.mock
    if (typeof options.mock !== 'undefined') {
        isMock = options.mock
    }
    // 对线上环境处理
    if (config.env == 'prod') {
        // 不给接触到mock的机会
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL =isMock ? config.mockApi : config.baseApi
    }
    return service(options)
}



export default request