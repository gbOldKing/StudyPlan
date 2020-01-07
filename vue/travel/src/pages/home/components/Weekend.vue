<template>
    <div>
        <h3 class="title">周末去哪儿</h3>
        <ul>
            <li class="item" border-bottom v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" alt="" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HomeWeekend',
        props: {
            list: Array
        }
    }
</script>

<style scoped lang="stylus">
    @import '~styles/mixins.styl'
    .title
        line-height: .8rem
        background: #eee
        text-indent: .2rem

    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 37.02%
        .item-img
            width: 100%

    .item-info
        padding: .1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
</style>
