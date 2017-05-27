<template>
  <div class="list">
    <div class="list-item-outer" 
      v-for="(item, index) in items" 
      @click="router(item.path)">
      <div class="list-item">
        <div class="list-item-primary" v-html="item.text"></div>
        <div class="list-item-arrow"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'smart-list',
  props: {
    items :{
      type: Array,
      default: []
    }
  },
  methods: {
    router(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../../../common/sass/var.scss";
.list {
  background: $white;
  border-top: 1px solid $base-border-color;
  border-bottom: 1px solid $base-border-color;
  .list-item-outer {
    .list-item {
      height: 40px;
      line-height: 40px;
      margin-left: 15px;
      font-size: 14px;
      color: $base-font-dark-color;
      border-bottom: 1px solid $base-border-color;
      margin-bottom: -1px;
      position: relative;
      .list-item-primary {
        position: absolute;
        left: 0;
        top: 0;
        width: calc(100% - 20px);
        height: 100%;
      }
      .list-item-arrow {
        position: absolute;
        right: 0;
        top: 0;
        width: 20px;
        height: 100%;
      }
      .list-item-arrow:after {
        content: " ";
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: $base-arrow-color;
        border-style: solid;
        -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: absolute;
        top: calc(50% - 4.2px);
        right: 10px;
      }
    }
  }
  .list-item-outer:active {
    background: $base-background-active-color;
  }
}
</style>