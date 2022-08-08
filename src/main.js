/*
 * @Date: 2022-08-03 17:34:03
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-08-08 17:00:16
 * @FilePath: /webpack-tpl-admin/src/main.js
 */
import Vue from 'vue'
import Element from 'element-ui'
import './styles/element-variables.scss'
import './styles/index.scss'
// import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'
import './permission' // permission control
// import './utils/error-log' // error log
import * as filters from './filters' // global filters
Vue.use(Element)
// Vue.use(Element, {
//   size: Cookies.get('size') || 'medium', // set element-ui default size
//   locale: enLang // 如果使用中文，无需设置，请删除
// })
// 全局过滤方法
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => {
    return h(App)
  },
})
