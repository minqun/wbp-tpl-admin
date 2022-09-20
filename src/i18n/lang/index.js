/*
 * @Date: 2022-09-19 12:00:22
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-09-19 15:10:25
 * @FilePath: /webpack-tpl-admin/src/i18n/lang/index.js
 */
const langs = require.context('./', true, /\.js$/)
const obj = {}
langs
  .keys()
  .map(item => item.match(/\.\/(.+)?\.js$/)[1])
  .filter(item => item != 'index')
  .forEach(item => {
    obj[item] = require(`./${item}.js`).default
  })
console.log(obj)
export default obj
