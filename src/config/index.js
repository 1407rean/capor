/**
 *  环境配置文件
 *  开发环境
 *  测试环境
 *  线上环境
 */

// 当前的环境
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    development: {
        baseApi: '/api',
        mockApi: 'http://127.0.0.1:8081'
    },
    test: {
        baseApi: '//test.future.com/api',
        mockApi: 'http://127.0.0.1:8080'
    },
    prod: {
        baseApi: '//future.com/api',
        mockApi: 'http://127.0.0.1:8080'
    }
}

export default {
    env,
    mock: true,
    ...EnvConfig[env]
}