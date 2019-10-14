<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点
    </div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  .header
    display flex
    line-height: .86rem
    background: #00bcd4;
    color: #fff;
    text-align: center
    .header-left
      width: .64rem
    .header-input
      flex: 1
      background-color: #fff
      border-radius:.1rem
      margin-top:.12rem
      height:.64rem
      margin-left:.2rem
    .header-right
      width: 1.24rem
</style>
