<template>
  <div class="wrapper">
    <smart-header :titleMap="navs" :back="true" />
    <div class="main">
      <transition name="move" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Nav from '../../config/nav'
export default {
  data() {
    return {
      
    }
  },
  computed: {
    navs() {
      return Nav.XXX.concat(Nav.XXX, Nav.XXX)
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