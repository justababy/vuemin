<template>
  <div class="wrapper">
    <smart-header :titleMap="Nav.tabbar" :cornerMenu="cornerMenu" />
    <div class="main">
      <transition name="move" mode="out-in">
        <router-view />
      </transition>
    </div>
    <smart-tabbar :navs="Nav.tabbar" />
  </div>
</template>

<script>
import Nav from '../../config/nav'
export default {
  data() {
    return {
      Nav
    }
  },
  computed: {
    cornerMenu() {
      return this.Nav.corner
    }
  }
}
</script>

<style lang="sass" scoped>
  .wrapper {
    position: relative;
    height: 100%;
  }
  .main {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: calc(100% - 80px);
    overflow-y: auto;
    background: #fbf9fe;
    z-index: 0;
  }
</style>