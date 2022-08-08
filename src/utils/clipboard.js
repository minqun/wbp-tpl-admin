/*
 * @Date: 2022-08-05 18:39:49
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-08-08 18:01:16
 * @FilePath: /webpack-tpl-admin/src/utils/clipboard.js
 */
import Vue from 'vue'
import Clipboard from 'clipboard'

const clipboardSuccess = () => {
  Vue.prototype.$message({
    message: 'Copy successfully',
    type: 'success',
    duration: 1500,
  })
}

const clipboardError = () => {
  Vue.prototype.$message({
    message: 'Copy failed',
    type: 'error',
  })
}

export default (text, event) => {
  const clipboard = new Clipboard(event.target, {
    text: () => text,
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
