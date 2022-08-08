/*
 * @Date: 2022-08-05 18:20:14
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-08-08 18:05:06
 * @FilePath: /webpack-tpl-admin/src/directive/permission/permission.js
 */
import store from '@/store'

const checkPermission = (el, binding) => {
  const { value } = binding
  const roles = store.getters && store.getters.roles

  if (value && value instanceof Array) {
    if (value.length > 0) {
      const permissionRoles = value

      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  } else {
    throw new Error('need roles! Like v-permission="[\'admin\',\'editor\']"')
  }
}

export default {
  inserted(el, binding) {
    checkPermission(el, binding)
  },
  update(el, binding) {
    checkPermission(el, binding)
  },
}
