<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-fanhui"></span>
    </div>
    <div class="header-input">
      <div class="input-search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="请输入城市/景点/游玩主题"/>
      </div>
    </div>
    <div class="header-right">
      城市
      <span class="iconfont icon-arrow-left-copy-copy"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader'
  }
</script>

<style scoped lang="stylus">
  @import "~@/assets/styles/varibles.styl"
  .header {
    display: flex;
    /*height: .86rem;*/
    height: 43px;
    line-height: 43px;
    background-color: $bgColor;
    color: #fff;

    .header-left {
      /*width: .64rem;*/
      width: 32px;
      float: left;
      text-align: center;
      font-size: 10px;
    }

    .header-input {
      flex: 1;
      background-color: #fff;
      border-radius: 4px;
      border: 0;
      margin 8px 0
      color: #333;
      .input-search {
        position: relative;
        left: 2px;
        bottom: 8px;
        input {
          border 0;
          background: none;
          outline: none;
          font-size: 14px;
        }

        input[type="text"]:focus,
        input[type="password"]:focus {
          /*border: 1px solid #eb7350;*/
          background: #fff;
          outline: none;
        }
      }
    }

    .header-right {
      /*width: 1.24rem;*/
      width: 62px;
      float: right;
      text-align: center;
      margin: 0 4px;
    }
  }
</style>
