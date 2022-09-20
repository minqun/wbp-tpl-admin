/*
 * @Date: 2022-09-19 11:58:14
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-09-19 15:07:11
 * @FilePath: /webpack-tpl-admin/src/i18n/lang/zh.js
 */
import zhLocale from 'element-ui/lib/locale/lang/zh-CN' // 引入element语言包
const zh = {
  message: {
    navigationBar: {
      icon: '图标',
      navigationBar: '导航栏',
      more: '更多',
    },
  },
  ...zhLocale,
}
export default zh
