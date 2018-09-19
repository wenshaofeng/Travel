<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="item of swiperList" :key="item.id"> <img class="loop" :src="item.imUrl" >
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default{
      name: 'HomeSwiper',
      data () {
        return {
          swiperOption: {
            pagination : '.swiper-pagination',
            loop:true
          },
          swiperList:[
            {
              id:'001',
              imUrl:"http://img1.qunarzz.com/piao/fusion/1808/70/5603e6a535062402.jpg_750x200_2c552f2c.jpg"
            },{
              id:'002',
              imUrl:"http://img1.qunarzz.com/piao/fusion/1808/f4/5f2289f8675f0502.jpg_750x200_ab1633c7.jpg"
            },{
              id:'003',
              imUrl:"http://img1.qunarzz.com/piao/fusion/1809/6a/847ac7b98f10e202.jpg_750x200_f0593cb5.jpg"
            }
          ]
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
    padding-bottom 26.7%
    background #eee
    .loop
      width 100%

</style>
