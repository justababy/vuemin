<template>
  <div>
    <div class="menu" v-if="menus.length">
      <template v-for="(menu, index) in menus">
        <div class="menu-item" @click="router(menu.path)" v-bind:class="{active: menu.path == path}">{{menu.text}}</div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menus: Array
  },
  data() {
    return {
      path: this.$route.path,
    }
  },
  methods: {
    router(path) {
      if (path.indexOf('http') == 0) {
        window.open(path)
      } else {
        this.$router.push(path)
      }   
    }
  },
  watch: {
    $route(to, from) {
      this.path = to.path
    }
  }
}
</script>

<style lang="sass" scoped>
.menu {
  font-size: 14px;
  cursor: pointer;
  border-bottom: 1px solid #8698B0;
  .menu-item {
    display: inline-block;
    height: 56px;
    line-height: 56px;
    padding: 0 20px;
    white-space: nowrap;
    transition: background-color .3s;
  }
  .active {
    border-bottom: 2px solid #20a0ff;
  }
}
</style>