<template>
  <div class="tabbar">
    <div class="tabbar-item" 
      v-for="(nav, index) in navs" 
      v-bind:class="{active: nav.path == path}" 
      @click.stop="router(nav.path, index)"
      v-html="nav.text">
    </div>
    <div class="menu-outer-overall">
      <div class="menu-outer" v-for="(nav, index) in navs">
        <div class="menu-main" v-show="menuShow[index]">
          <div class="menu-item" 
            v-for="(item, index) in nav.children"
            @click="router(item.path)"
            v-html="item.text">
          </div>
        </div>
        <div class="menu-arrow" v-show="menuShow[index]"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'smart-tabbar',
  props: {
    navs: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      path: this.$route.path,
      menuShow: [],
      body: document.getElementsByTagName('body')[0]
    }
  },
  methods: {
    router(path, index) {
      if (path) {
        this.$router.push(path)
        this.resetMenuShow()
      } else {
        let currentState = this.menuShow[index]
        this.resetMenuShow()
        this.$set(this.menuShow, index, !currentState)
      }
    },
    resetMenuShow() {
      this.menuShow = []
      for (let i = 0; i < this.navs.length; i++) {
        this.menuShow.push(false)
      }
    }
  },
  mounted() {
    this.resetMenuShow()
    this.body.addEventListener('click', this.resetMenuShow)
  },
  destroyed() {
    this.body.removeEventListener('click', this.resetMenuShow)
  },
  watch: {
    $route(to, from) {
      this.path = this.$route.path
    }
  },
}
</script>

<style lang="sass" scoped>
@import "../../../common/sass/var.scss";
.tabbar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  font-size: 14px;
  background: $base-background-color;
  color: $base-font-light-color;
  display: -webkit-box;
  .tabbar-item {
    -webkit-box-flex: 1;
    width: 0;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .menu-outer-overall {
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 100%;
    display: -webkit-box;
    .menu-outer {
      position: relative;
      -webkit-box-flex: 1;
      width: 0;
      .menu-main {
        position: absolute;
        bottom: 0;
        width: 90%;
        margin-left: 5%;
        margin-bottom: 8px;
        background: $base-background-color;
        color: $base-font-light-color;
        border-radius: 3px;
        .menu-item {
          width: 86%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          margin: 0 7% 0 7%;
          color: $white;
          font-size: 14px;
        }
        .menu-item:not(:first-child) {
          border-top: 1px solid $gray;
        }
      }
      .menu-arrow {
        position: absolute;
        top: -8px;
        left: 50%;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid $base-background-color;
        -webkit-transform: translateX(-50%);
      }
    }
  }
  .active {
    color: $base-font-active-color;
  }
}
</style>