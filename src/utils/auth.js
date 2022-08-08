/*
 * @Date: 2022-08-05 18:39:49
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-08-08 18:44:00
 * @FilePath: /webpack-tpl-admin/src/utils/auth.js
 */
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export const getToken = () => {
  return Cookies.get(TokenKey)
}

export const setToken = token => {
  return Cookies.set(TokenKey, token)
}

export const removeToken = () => {
  return Cookies.remove(TokenKey)
}
