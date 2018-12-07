<template>
    <div class="container" @click="cancleGallary">
      <div class="wrapper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item , index) of imgs "
         :key="index">
            <img class="swiper-img" :src="item">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
  export default{
    name:"CommonGallary" ,
    props: {
      imgs : {
        type : Array,
        default () {   //默认值
          return []
        }
      }
    },
    methods : {
      cancleGallary : function () {
        this.$emit('cancel')
      }
    },
    data () {
      return {
        swiperOption: {
          pagination : '.swiper-pagination',
          paginationType : 'fraction', //分页器样式类型
          autoplay:false,
          observeParents : true ,
          observer : true
        }
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .container >>> .swiper-wrapper
    display flex
    align-items center
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 6
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      width 100%
      .swiper-img
        width 100%
      .swiper-pagination
        color white
        bottom -1rem
</style>
