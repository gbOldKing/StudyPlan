<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="img-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeIcons',
        data () {
            return {
                swiperOption: {
                    autoplay: false
                }
            }
        },
        props: {
            list: Array
        },
        computed: {
            pages () {
                let pages = []
                this.list.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "~styles/mixins.styl"
    .icons
        margin-top: .1rem
        touch-action: none

    .icons >>> .swiper-container
        width: 100%

    .icon
        position: relative
        float: left
        width: 25%
        height: 0
        padding-bottom: 25%
        .icon-img
            position: absolute
            left: 0
            top: 0
            right: 0
            bottom: .5rem
            box-sizing: border-box
            padding: .1rem
            .img-content
                display: block
                height: 100%
                margin: 0 auto

    .img-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .5rem
        height: .5rem
        color: #333
        text-align: center
        padding: 0 .2rem;
        ellipsis()
</style>
