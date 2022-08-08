/*
 * @Date: 2022-08-03 18:09:01
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-08-08 18:11:31
 * @FilePath: /webpack-tpl-admin/src/api/user.js
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data,
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token },
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post',
  })
}
