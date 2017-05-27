<template>
  <div class="header">
    <div class="back" v-if="back" @click="goBack">返回</div>
    <span class="title" v-html="title"></span>
    <div class="corner-menu-button" v-if="cornerMenu.length" @click.stop="toggleMenu">+</div>
    <div class="corner-menu" v-if="cornerMenu.length" v-show="cornerMenuShow">
      <div class="corner-menu-arrow"></div>
      <div class="corner-menu-content">
        <div class="item" 
          v-for="(item, index) in cornerMenu" 
          v-html="item.text"
          @click="router(item.path)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'smart-header',
  props: {
    titleMap: {
      type: Array,
      default: () => {
        return []
      }
    },
    back: {
      type: Boolean,
      default: false
    },
    cornerMenu: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      path: this.$route.path,
      cornerMenuShow: false,
      body: document.getElementsByTagName('body')[0]
    }
  },
  computed: {
    title() {
      for (let i in this.titleMap) {
        if (this.titleMap[i].path === this.path) {
          return this.titleMap[i].text
        }
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    toggleMenu() {
      this.cornerMenuShow = !this.cornerMenuShow
    },
    closeMenu() {
      this.cornerMenuShow = false
    },
    router(path) {
      this.$router.push(path)
    }
  },
  mounted() {
    if (this.cornerMenu.length) {
      this.body.addEventListener('click', this.closeMenu)
    }
  },
  destroyed() {
    if (this.cornerMenu.length) {
      this.body.removeEventListener('click', this.closeMenu)
    }
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
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  background: $base-background-color;
  color: $base-font-light-color;
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 85px;
    height: 100%;
  }
  .back:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border: 1px solid $white;
    border-width: 1px 0 0 1px;
    -webkit-transform: rotate(315deg);
    top: calc(50% - 5px);
    left: 15px;
  }
  .title {
    font-size: 16px;
  }
  .corner-menu-button {
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 100%;
    font-size: 22px;
  }
  .corner-menu {
    position: absolute;
    top: 46px;
    right: 5px;
    z-index: 1000;
    .corner-menu-arrow {
      position: absolute;
      top: -5px;
      left: 90px;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid $base-background-color;
      -webkit-transform: translateX(-50%);
    }
    .corner-menu-content {
      width: 100px;
      height: 100px;
      background: $base-background-color;
      color: $base-font-light-color;
      border-radius: 3px;
      .item {
        width: 80px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin: 0 10px 0 10px;
        color: $white;
        font-size: 14px;
      }
      .item:not(:first-child) {
        border-top: 1px solid $gray;
      }
    }
  }
}
</style>