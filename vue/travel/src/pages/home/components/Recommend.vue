<template>
    <div>
      <h3 class="title">热销推荐</h3>
      <ul>
        <li class="item" border-bottom>
          <img src="https://imgs.qunarzz.com/sight/p0/1808/5d/5d39969e38b89767a3.img.jpg_200x200_98f1c80e.jpg" alt="" class="item-img">
          <div class="item-info">
            <p class="item-title">大连圣亚海洋世界</p>
            <p class="item-desc">浪漫大连首站，浪漫的海洋主题乐园</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend'
}
</script>

<style scoped lang="stylus">
  .title
    margin-top:.2rem
    line-height:.8rem
    background-color: #eee
    text-indent:.2rem
  .item
    overflow: hidden
    display: flex
    height:1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding:.1rem
    .item-info
      flex:1
</style>
