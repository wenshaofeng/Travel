<template>
  <div>
    <div class="banner" @click="handleClick">
      <img class="banner-img"
           src="//img1.qunarzz.com/sight/p0/1810/22/226c137568f18ac0a3.water.jpg_600x330_554b60a8.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title"> 深圳欢乐谷(AAAAA景区)</div>
      </div>
      <div class="banner-number">
        <span class="iconfont banner-icon"> &#xe796; </span>
        52
      </div>
    </div>
    <common-gallary @cancel="handleClick" :imgs="imgs" v-show="showGallary"></common-gallary>
  </div>

</template>


<script>
  import CommonGallary from 'common/gallary/Gallary.vue'
  export default{
    name:'DetailBanner',
    components:{
      CommonGallary
    },
    props: [],
    data () {
      return {
        imgs : ['http://img1.qunarzz.com/sight/p0/1412/42/ab493fd01bc3d2b2b0874fe0b0ae5540.water.jpg_r_800x800_b0342038.jpg','http://img1.qunarzz.com/sight/p0/1412/b5/c99be07b7b79cfb5900e03a35bc3051f.water.jpg_r_800x800_454faea8.jpg',
          'http://img1.qunarzz.com/sight/p0/1412/4b/632fe62f622b9b112cdf9f3b80ce8f78.water.jpg_r_800x800_a387b255.jpg','http://img1.qunarzz.com/sight/p0/1503/96/96334094d01ce355.water.jpg_r_800x800_d296438f.jpg'],
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
