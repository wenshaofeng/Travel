<template>
    <div>
      <detail-banner :sightName="sightName"
                     :bannerImg="bannerImg"
                     :gallary="gallaryImgs">
      </detail-banner>
      <detail-header> </detail-header>
      <detail-list :list="categoryList"></detail-list>
      <div class="box"></div>
    </div>
</template>


<script>
  import DetailBanner from "./components/Banner.vue"
  import DetailHeader from "./components/Header.vue"
  import DetailList from "./components/List.vue"
  import axios from 'axios'
  export default{
    name: 'Detail'     ,
    props: {},
    components:{
      DetailBanner,
      DetailHeader,
      DetailList
    },
    methods:{
      getDetailInfo () {
        axios.get('/api/detail.json?id='+this.$route.params.id)
          .then(this.getDetaiInfoSucc)
      },
      getDetaiInfoSucc (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.categoryList = data.categoryList
        }
      }
    },
    data (){
      return{
        sightName : '',
        bannerImg : '',
        gallaryImgs : [],
        categoryList : [],
        LastId : ''

      }
    },
    mounted (){
      this.LastId = this.$route.params.id
      this.getDetailInfo ()
    },
    activated () {
      if (this.LastId !== this.$route.params.id)
      {
        this.LastId = this.$route.params.id
        this.getDetailInfo()
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .box
    height 50rem
  .bo
    height 50rem
</style>
