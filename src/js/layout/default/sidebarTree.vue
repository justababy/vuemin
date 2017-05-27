<template>
  <div class="menu">
    <template v-for="(menu, index) in menus">
      <template v-if="menu.children && !menu.end">
        <div class="menu-item" @click="toggle(menu)" :style="{paddingLeft: indentWidth + 'px'}"><i :class="menu.icon" />{{menu.text}}</div>
        <div class="submenu-outer" v-show="menu.expand">
          <tree-menu :menus="menu.children" :level="level + 1" v-on:childExpand="childExpand" />
        </div>
      </template>
      <template v-else>
        <div class="menu-item" @click="router(menu)" v-bind:class="{active: menu.path == routePath}" :style="{paddingLeft: indentWidth + 'px'}">
          <i :class="menu.icon" />{{menu.text}}
        </div>
      </template>    
    </template>
  </div>
</template>

<script>
export default {
  name: 'tree-menu',
  props: {
    menus: Array,
    level: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      routePath: this.$route.path
    }
  },
  computed: {
    indentWidth() {
      return 23 + this.level * 20
    }
  },
  mounted() {    
    this.dealPath(this.$route.path)
  },
  methods: {
    router(menu) {
      let path = menu.path
      if (!path && menu.children && menu.children.length) {
        path = menu.children[0].path
      }
      if (path.indexOf('http') == 0) {
        window.open(path)
      } else {
        this.$router.push(path)
      }      
      this.$store.commit('HEADER_MENUS', menu.children)
    },
    toggle(menu) {
      this.$set(menu, 'expand', !menu.expand)
    },
    childExpand() {     
      for (let i in this.menus) {
        let children = this.menus[i].children
        if (children) {
          for (let j in children) {
            if (children[j].expand) {
              this.$set(this.menus[i], 'expand', true)
              return
            }
          }
        }
      }
    },
    dealPath(dest) {
      let meetEnd = false
      for (let i in this.menus) {
        let menu = this.menus[i], inPath = false
        if (menu.children) {
          for (let j in menu.children) {
            if (dest == menu.children[j].path) {              
              if (menu.end) {
                this.routePath = menu.path     
                this.$store.commit('HEADER_MENUS', menu.children)
                meetEnd = true
              }
              inPath = true
              break
            }
            if (menu.children[j].expand) {
              inPath = true
              break
            }
          }
        }
        else if (dest == menu.path) {
          this.$store.commit('HEADER_MENUS', [])
          inPath = true
        }
        if (inPath) {          
          this.$set(menu, 'expand', true)
          this.$emit('childExpand')     
        }
      }
      !meetEnd && (this.routePath = dest)    
    }
  },
  watch: {
    $route(to, from) {
      this.dealPath(to.path)
    }
  }
}
</script>

<style lang="sass" scoped>
.menu {
  font-size: 14px;
  cursor: pointer;
  .menu-item {
    width: 100%;
    height: 56px;
    line-height: 56px;
    padding: 0 10px 0 23px;
    white-space: nowrap;
    transition: background-color .3s;
    .fa {
      width: 15px;
      margin-right: 10px;
    }
  }
  .submenu-outer {
    .menu-item {
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding: 0 30px 0 50px;
      background: #1f2d3d;
      white-space: nowrap;
      transition: background-color .3s;
    }
  }
  .menu-item:hover {
    background: #48576a;
  }
  .active {
    color: #20a0ff;
  }
}
</style>