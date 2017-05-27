<template>
  <div class="footer">
	<div class="line-01"></div>
	<div class="line-02">Copyright © 2011 - {{CopyrightEndYear}} XXX Company. All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  computed: {
    CopyrightEndYear() {
      const date = new Date
      return date.getFullYear()
    }
  }
}
</script>

<style lang="sass" scoped>
.footer {
  width: 100%;
  height: 70px;
  background: #324157;
  color: #fff;
  padding: 15px 0 15px 0;
  text-align: center;
  font-family: "Microsoft YaHei";
  .line-01 {
    font-size: 12px;
    margin-bottom: 5px;
  }
  .line-02 {
    font-size: 14px;
  }
}
</style>