<template>
  <input class="t-input" type="text" :value="currentValue" @keyup="checkInput" />
</template>
<script>
export default {
  props: ['type', 'value'],
  data() {
    return {
      currentValue: this.value
    }
  },
  methods: {
    checkInput(e) {
      this.currentValue =  e.target.value
      if (this.type == "int") {
        this.currentValue = e.target.value.replace(/\D|^0/g, '')
      } else if (this.type == "float") {
        this.currentValue = e.target.value.replace(/[^0-9.-]/g, '')
      }
      this.$emit('input', this.currentValue)
    }
  },
  watch: {
    value(val, old) {
      this.currentValue = val
    }
  }
}
</script>
<style lang="sass" scoped>
.t-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #bfcbd9;
  box-sizing: border-box;
  color: #1f2d3d;
  display: inline-block;
  font-size: inherit;
  height: 36px;
  line-height: 1;
  outline: 0;
  padding: 3px 10px;
  transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
  width: 100%;
}
.t-input:focus {
  border: 1px solid #20a0ff;
}
</style>