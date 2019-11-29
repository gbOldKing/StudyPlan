<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display flex
    line-height: .86rem
    background: $bgColor;
    color: #fff;
    text-align: center
    .header-left
      width: .64rem
      .back-icon
        text-align: center
        font-size:.3rem
    .header-input
      flex: 1
      text-align:left
      background-color: #fff
      border-radius:.1rem
      margin-top:.12rem
      height:.64rem
      line-height: .64rem
      margin-left:.2rem
      color: #ccc
      padding-left:.15rem
    .header-right
      width: 1.24rem
      .arrow-icon
        font-size:.2rem
</style>
