/*
 * @Date: 2022-08-03 18:08:48
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-08-03 18:13:44
 * @FilePath: /webpack-tpl-admin/src/store/modules/errorLog.js
 */
const state = {
  logs: [],
}

const mutations = {
  ADD_ERROR_LOG: (state, log) => {
    state.logs.push(log)
  },
  CLEAR_ERROR_LOG: state => {
    state.logs.splice(0)
  },
}

const actions = {
  addErrorLog({ commit }, log) {
    commit('ADD_ERROR_LOG', log)
  },
  clearErrorLog({ commit }) {
    commit('CLEAR_ERROR_LOG')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
