<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide v-for="item of list" :key="item.id">
         <img class="loop" :src="item.imgUrl" >
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default{
      name: 'HomeSwiper',
      props:{
          list : Array
      },
      data () {
        return {
          swiperOption: {
            pagination : '.swiper-pagination',
            loop:true
          }
        }
      }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
   background #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 30%
    background #eee
    .loop
      width 100%

</style>
