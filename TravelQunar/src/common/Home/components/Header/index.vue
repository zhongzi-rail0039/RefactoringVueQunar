<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">
      <input type="text">
    </div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader'
  }
</script>

<style scoped lang="stylus">
  .header {
    display: flex;
    /*height: .86rem;*/
    /*height: 43px;*/
    line-height: 43px;
    background-color: #00bcd4;
    .header-left {
      /*width: .64rem;*/
      width: 32px;
      float: left;
    }
    .header-input {
      flex: 1;
      background-color: #fff;
      border-radius: 4px;
      border: 0;
    }
    .header-right {
      /*width: 1.24rem;*/
      width: 62px;
      float: right;
      text-align: center;
    }
  }
</style>
