<template>
  <div class="wrapper">
    <t-sidebar :menus="sideMenus" />
    <div class="main">
      <t-header />
      <t-headerbar :menus="headerMenus" />
      <div class="content">
        <transition name="move" mode="out-in">
          <router-view />
        </transition>
      </div>
      <t-footer />
    </div>
  </div>
</template>

<script>
import Util from '../../util'
import Nav from '../../config/nav'
import tSidebar from './sidebar.vue'
import tHeaderbar from './headerbar.vue'
import tHeader from './header.vue'
import tFooter from './footer.vue'
export default {
  data() {
    return {
      sideMenus: []
    }
  },
  computed: {
    headerMenus() {
      return this.$store.getters.headerMenus
    },
  },
  components: {
    tSidebar, 
    tHeaderbar,
    tHeader,
    tFooter
  },
  mounted() {
    let self = this
    Util.navAuthFilter(Nav).then(newNav => {
      self.sideMenus = newNav
    })
    // 页面加载时美化URL（去除url后面ticket等参数）
    window.location.href = Util.beautyUrl()
  }
}
</script>

<style lang="sass" scoped>
  .wrapper {
    display: flex;
    flex-direction: row;
  }
  .main {
    display: flex;
    flex-direction: column;
    flex: auto;
    margin-left: 200px;
    overflow: hidden;
  }
  .content {
    padding: 20px;
    flex: auto;
    overflow-y: auto;
  }
</style>