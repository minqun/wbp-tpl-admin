/*
 * @Date: 2022-08-03 18:08:43
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-08-08 18:13:14
 * @FilePath: /webpack-tpl-admin/store/getters.js
 */
const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permissionRoutes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
}
export default getters
