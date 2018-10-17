<template>
  <div>

       <home-header :city="city"></home-header>
       <home-swiper :list="swiperList"></home-swiper>
        <icons :iconList="iconList"></icons>
        <home-recommend :recommendList="recommendList">
        </home-recommend>
        <weekend :list="weekendList"></weekend>
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
export default{
    name:'Home',
    data (){
        return{
            city:'',
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
    methods: {
        getHomeInfo(){
            axios.get('/api/index.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            res = res.data
            if(res.ret && res.data) {
                const  data = res.data
                this.city =data.city
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
                this.weekendList = data.weekendList
            }
        }
    },
        mounted () {
            this.getHomeInfo()
        }//页面挂载好了以后执行

  }

</script>


