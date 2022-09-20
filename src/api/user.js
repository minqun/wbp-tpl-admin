/*
 * @Date: 2022-08-03 18:09:01
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-09-14 15:37:35
 * @FilePath: /webpack-tpl-admin/src/api/user.js
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data,
  })
}

export function getInfo(token) {
  return request({
    url: '/api/user/info',
    method: 'get',
    params: { token },
  })
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'post',
  })
}
