<template>
  <div class="home">
    <div class="overview-area">
      <span class="overview-icon"></span>
      <span class="overview-title">{{title | titleFormat}}</span>
    </div>
    <div class="show-area">
      <el-table
        :data="tableData"
        border
        style="width:100%;margin:20px 0 0 0;">
        <el-table-column
          prop="date"
          label="日期">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'table'
    }
  },
  computed: {
    tableData() {
      return this.$store.getters.tableData
    }
  },
  methods: {
    
  },
  mounted() {
    this.$store.dispatch('table')
  },
  watch: {
    $route(to, from) {
      console.log(to, from)
    }
  },
  filters: {
    titleFormat(value) {
      return value.substring(0, 1).toUpperCase() + value.substring(1)
    }
  },
}
</script>

<style lang="sass" scoped>
.home {
  width: 100%;
  .overview-area {
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin-top: 20px;
    padding-left: 20px;
    .overview-icon {
      display: inline-block;
      width: 5px;
      height: 18px;
      background: #2b3745;
      position: relative;
      top: 3px;
    }
    .overview-title {
      display: inline-block;
      font-size: 16px;
      color: #5b5f68;
    }
  }
  .show-area {
    max-width: 1000px;
    padding-left: 20px;
  }
}
</style>