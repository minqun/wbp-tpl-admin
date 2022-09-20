/*
 * @Date: 2022-08-03 18:09:10
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-08-17 17:13:56
 * @FilePath: /webpack-tpl-admin/src/layout/mixin/ResizeHandler.js
 */
import store from '@/store'

const { body } = document
const WIDTH = 992 // refer to Bootstrap's responsive design

export default {
  watch: {
    $route(route) {
      if (this.device === 'mobile' && this.sidebar.opened) {
        store.dispatch('app/closeSideBar', { withoutAnimation: false })
      }
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.$ResizeHandler)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$ResizeHandler)
  },
  mounted() {
    const isMobile = this.$IsMobile()
    if (isMobile) {
      store.dispatch('app/toggleDevice', 'mobile')
      store.dispatch('app/closeSideBar', { withoutAnimation: true })
    }
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $IsMobile() {
      const rect = body.getBoundingClientRect()
      return rect.width - 1 < WIDTH
    },
    $ResizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$IsMobile()
        store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')

        if (isMobile) {
          store.dispatch('app/closeSideBar', { withoutAnimation: true })
        }
      }
    },
  },
}
