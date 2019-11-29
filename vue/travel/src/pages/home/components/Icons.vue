<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="img-desc">{{item.title}}</p>
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
                iconList: [{
                    id: '0001',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    title: '热门景点'
                }, {
                    id: '0002',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                    title: '南宁必游'
                }, {
                    id: '0003',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
                    title: '漂流'
                }, {
                    id: '0004',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                    title: '游乐场'
                }, {
                    id: '0005',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    title: '热门景点'
                }, {
                    id: '0006',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                    title: '南宁必游'
                }, {
                    id: '0007',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
                    title: '漂流'
                }, {
                    id: '0008',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                    title: '游乐场'
                }, {
                    id: '0009',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                    title: '游乐场'
                }]
            }
        },
        computed: {
            pages () {
                let pages = []
                this.iconList.forEach((item, index) => {
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
