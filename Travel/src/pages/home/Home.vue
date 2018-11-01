<template>
  <div class="list" ref="wrapper">
    <div>
      <home-header></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <icons :iconList="iconList"></icons>
      <home-recommend :recommendList="recommendList">
      </home-recommend>
      <weekend :list="weekendList"></weekend>
    </div>
  </div>
</template>

<script>
  //export default 指的是导出，意思是定一个一个组件，然后把组件导出出去
  import HomeHeader from "./components/HomeHeader.vue";
  import HomeSwiper from "./components/Swiper.vue"
  import icons from "./components/icons.vue"
  import HomeRecommend from "./components/HomeRecommand.vue"
  import Weekend from "./components/Weekend.vue"
  import axios from "axios"
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

export default{
    name:'Home',
    data (){
        return{
            lastCity: '',
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[]
        }
    },
    components:{
        HomeHeader,
        HomeSwiper,
        icons,
        HomeRecommend,
        Weekend
    },
    computed :{
      ...mapState(['city'])
    },
    methods: {
        getHomeInfo(){
            axios.get('/api/index.json?city='+this.city)
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            res = res.data
            if(res.ret && res.data) {
                const  data = res.data
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        },

    },
        mounted () {
          this.lastCity = this.city
          this.getHomeInfo()
          const scroll = new BScroll(this.$refs.wrapper)
        }, //页面挂载好了以后执行
        activated () {
          if (this.lastCity !== this.city)
          {
            this.lastCity = this.city
            this.getHomeInfo()
          }
        }
  }

</script>

<style lang="stylus"  rel='stylesheet/stylus' scoped>
  .list
    height 100%
</style>
