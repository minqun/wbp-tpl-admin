<!--
 * @Date: 2022-08-08 11:26:20
 * @LastEditors: M.re c1029mq@qq.com
 * @LastEditTime: 2022-08-08 17:03:12
 * @FilePath: /webpack-tpl-admin/src/views/redirect/index.vue
-->
<script>
  export default {
    created() {
      const { params, query } = this.$route
      const { path } = params
      this.$router.replace({ path: `/${path}`, query })
    },
    render: h => h(),
  }
</script>
