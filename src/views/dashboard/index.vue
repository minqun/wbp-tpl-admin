<!--
 * @Date: 2022-08-09 17:47:16
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-09-19 15:07:40
 * @FilePath: /webpack-tpl-admin/src/views/dashboard/index.vue
-->
<template>
  <div class="dashboard-container">dashboard{{ $t('message.navigationBar.icon') }}</div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Dashboard',
    data() {
      return {
        currentRole: 'adminDashboard',
      }
    },
    computed: {
      ...mapGetters(['roles']),
    },
    created() {
      if (!this.roles.includes('admin')) {
        this.currentRole = 'editorDashboard'
      }
    },
  }
</script>
