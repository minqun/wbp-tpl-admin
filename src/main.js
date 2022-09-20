/*
 * @Date: 2022-08-03 17:34:03
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-09-19 15:10:47
 * @FilePath: /webpack-tpl-admin/src/main.js
 */
import Vue from 'vue'
import Element from 'element-ui'
import './styles/element-variables.scss'
import './styles/index.scss'
import locale from 'element-ui/lib/locale'
import enLang from 'element-ui/lib/locale/lang/en' // 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖
import zhLocale from 'element-ui/lib/locale/lang/zh-CN' // 引入element语言包
import '@/styles/index.scss' // global css
import App from './App'
import './icons' // icon
import store from './store'
import VueI18n from 'vue-i18n'
import router from './router'
import messages from './i18n/lang/index.js'
import './permission' // permission control
import * as filters from './filters' // global filters

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: localStorage.lang || 'zh', // 初始未选择默认 cn 中文
  messages,
})
console.log(messages, 'messages')
locale.i18n((key, value) => i18n.t(key, value)) // 兼容element'
Vue.use(Element)
// 全局过滤方法
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
new Vue({
  el: '#app',
  i18n, // < --- HERE
  router,
  store,
  render: h => {
    return h(App)
  },
})
