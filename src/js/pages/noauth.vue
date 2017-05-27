<template>
  <div class="noauth">
    <div class="message">{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'noauth',
  data() {
    return {
      msg: '对不起，您没有访问该页面的权限'
    }
  }
}
</script>

<style lang="sass" scoped>
.noauth {
  width: 100%;
  .message {
  	width: 100%;
  	height: 200px;
  	line-height: 200px;
  	text-align: center;
  	font-size: 25px;
  }
}
</style>
