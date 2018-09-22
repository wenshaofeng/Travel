<template>
  <div class="icons">
    <swiper >
      <swiper-slide  v-for="(page,index) of pages"

      >
      <div class="icon"
           v-for="item of page"
           :key ="item.id"
      >
       <div class="icon-img">
         <img :src="item.imgUrl">
       </div>
      <p class="icon-desc"> {{item.desc}} </p>
     </div>
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
  import SwiperSlide from '../../../../node_modules/vue-awesome-swiper/src/slide'
  //export default 指的是导出，意思是定一个一个组件，然后把组件导出出去

  export default{
    components: {SwiperSlide},
    name:'icons',
    data (){
      return {
        iconList : [
          {
           id:'0001',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            desc:"景点门票哈哈哈哈哈哈"
          },
          {
            id:'0002',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
            desc:"水上乐园"
          },
          {
            id:'0003',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
            desc:"游乐场"
          },
          {
            id:'0004',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
            desc:"海洋馆"
          },
          {
            id:'0005',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
            desc:"景点门票"
          },
          {
            id:'0006',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
            desc:"水上乐园"
          },
          {
            id:'0007',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
            desc:"游乐场"
          },
          {
            id:'0008',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
            desc:"海洋馆"
          },
          {
            id:'0009',
            imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
            desc:"海洋馆"
          }

        ]
      }
    },
    computed: {
      pages () {
        const pages = []
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varliable.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
    .icon
      float left
      padding-bottom 25%
      width 25%
      height 0
      position relative
      overflow hidden
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        img
          height 100%
          display block
          margin 0 auto
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        color:$dareTextColor
        text-align center
        ellipsis()
</style>
