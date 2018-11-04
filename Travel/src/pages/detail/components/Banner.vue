<template>
  <div>
    <div class="banner" @click="handleClick">
      <img class="banner-img"
           :src='bannerImg'
            alt="">
      <div class="banner-info">
        <div class="banner-title"> {{this.sightName}}</div>
      </div>
      <div class="banner-number">
        <span class="iconfont banner-icon"> &#xe796; </span>
        {{this.gallary.length}}
      </div>
    </div>
    <common-gallary @cancel="handleClick" :imgs="gallary" v-show="showGallary"></common-gallary>
  </div>

</template>


<script>
  import CommonGallary from 'common/gallary/Gallary.vue'
  export default{
    name: 'DetailBanner',
    components: {
      CommonGallary
    },
    props: {
    sightName: String,
    bannerImg: String,
     gallary:Array
  },
    data () {
      return {
        showGallary :false
      }
    },
    methods:{
      handleClick : function () {
        this.showGallary = !this.showGallary
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  .banner::after
    content: " "
    display: block
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    min-height: .6rem
    background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8))
  .banner
    position relative
    overflow hidden
    width 100%
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      position absolute
      right .2rem
      bottom .36rem
      left .2rem
      min-height .4rem
      color #fff
      .banner-title
        line-height .4rem
        font-size: .36rem;
        text-shadow: 0 1px 2px rgba(0,0,0,0.50);
    .banner-number
      position absolute
      left .2rem
      bottom .86rem
      padding 0 .4rem
      line-height .4rem
      font-size .24rem
      text-align center
      height .4rem
      border-radius .1rem
      background rgba(0,0,0,.6)
      color #fff
      .banner-icon
        font-size .3rem
</style>
