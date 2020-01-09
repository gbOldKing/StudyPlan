<template>
    <div>
        <detail-banner
            :sightName="sightName"
            :bannerImg="bannerImg"
            :gallaryImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div style="height: 50rem;">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailList from './components/List'
    import axios from 'axios'

    export default {
        name: 'Detail',
        components: {
            DetailList,
            DetailHeader,
            DetailBanner
        },
        data () {
            return {
                sightName: '',
                bannerImg: '',
                gallaryImgs: [],
                list: []
            }
        },
        methods: {
            getDetailInfo () {
                const {id = ''} = this.$route.params
                axios.get('/api/detail.json', {
                    params: {id}
                })
                    .then(res => {
                        const {ret, data} = res.data
                        if (ret && data) {
                            this.sightName = data.sightName
                            this.bannerImg = data.bannerImg
                            this.gallaryImgs = data.gallaryImgs
                            this.list = data.categoryList
                        }
                    })
            }
        },
        mounted () {
            this.getDetailInfo()
        }
    }
</script>

<style scoped lang="stylus">

</style>
