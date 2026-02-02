import request from '@/utils/request'

interface LoginParams {
  username: string
  password: string
  captchaCode: string
  captchaKey: string
  rememberMe: boolean
}

// 登录接口
export function loginApi(data: LoginParams) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export function logoutApi() {
    return request({
      url: '/auth/logout',
      method: 'post',
    })
  }

// 获取用户信息
export function getUserInfoApi() {
  return request({
    url: "/auth/info",
    method: "get",
    params: {
      source: "admin"
    }
  })
}

export function getRouters() {
  return request({
    url: '/sys/menu/routers',
    method: 'get'
  })
}

// 获取验证码
export function getCaptchaApi() {
  return request({
    url: '/auth/getCaptcha',
    method: 'get'
  })
}


// 获取验证码开关
export function getCaptchaSwitchApi() {
  return request({
    url: '/sys/config/getConfigByKey/slider_verify_switch',
    method: 'get'
  })
}