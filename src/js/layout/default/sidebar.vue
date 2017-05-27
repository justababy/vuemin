<template>
  <div class="sidebar">
    <div class="login">
      <div class="face-icon" :style="faceIcon"></div>
      <div class="login-user">{{name}}</div>
      <div class="personal-center" title="个人中心"><i class="fa fa-cog" /></div>
      <div class="logout" @click="logout">退出</div>
    </div>
    <div class="menu">
      <tree-menu :menus="menus" />
    </div>    
  </div>
</template>

<script>
import treeMenu from './sidebarTree'
export default {
  props: {
    menus: Array
  },
  data() {
    return {
      name: 'Username',
      faceIcon: '',
    }
  },
  mounted() {
    
  },
  methods: {
    logout() {

    }
  },
  components: {
    treeMenu
  }
}
</script>

<style lang="sass" scoped>
.sidebar {
  position: fixed;
  width: 200px;
  height: 100%;
  color: #bfcbd9;
  background: #324157;
  .login {
    position: relative;
    width: 100%;
    height: 120px;
    border-bottom: 1px solid #636363;
    .face-icon {
      position: absolute;
      top: 15px;
      left: 35px;
      width: 65px;
      height: 65px;
      background-size: cover;
      border-radius: 50%;
      border: 2px double #fff;
    }
    .login-user {
      position: absolute;
      top: 85px;
      left: 0px;
      width: 135px;
      text-align: center;
    }
    .personal-center {
      position: absolute;
      top: 20px;
      left: 140px;
      font-size: 23px;
      cursor: pointer;
    }
    .logout {
      position: absolute;
      top: 84px;
      right: 20px;
      font-size: 14px;
      cursor: pointer;
    }
  }
  .menu{
    padding-top:20px;
  }
}
</style>