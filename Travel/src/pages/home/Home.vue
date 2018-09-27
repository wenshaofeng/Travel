<template>
  <div>

       <home-header></home-header>
       <home-swiper></home-swiper>
        <icons></icons>
        <home-recommend></home-recommend>
  </div>
</template>

<script>
  //export default 指的是导出，意思是定一个一个组件，然后把组件导出出去
import HomeHeader from "./components/HomeHeader.vue";
import HomeSwiper from "./components/Swiper.vue"
import icons from "./components/icons.vue"
import HomeRecommend from "./components/HomeRecommand.vue"
export default{
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        icons,
        HomeRecommend
    }
  }

</script>


