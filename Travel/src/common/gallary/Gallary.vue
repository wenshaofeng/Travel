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
        default () {
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
          paginationType : 'fraction',
          autoplay:false,
          observeParents : true ,
          observer : true
        }
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 2
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      width 100%
      height 0
      padding-bottom 60%
      .swiper-img
        width 100%
      .swiper-pagination
        color white
        bottom -1rem
</style>
